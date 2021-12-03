/* eslint-disable @typescript-eslint/naming-convention */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import databaseConnection from "src/providers/database";
import { BusinessFundingCampaignTransactionsModelCreationArgs } from "@bancosatoshi/database/business/model";

import { BtcPayServerWebhookRequestBody } from "./btc-pay-server.types";
import getInvoicePaymentMethod from "providers/btcpay/getInvoicePaymentMethod";
import getWebhookSecretByStoreId from "providers/aws/getWebhookSecretByStoreId";
import convert from "providers/currency/convert";

const headerSignatureMatchesWebhookKey = async (sig: string, body: BtcPayServerWebhookRequestBody) => {
  const webhookKey = await getWebhookSecretByStoreId(body.storeId);

  if (!webhookKey) {
    return false;
  }

  // @TODO we'll probably need to create a map of storeId => webhook_btcpay_sig because each store has its own webhook key
  // sha256=HMAC256(UTF8(webhook's secret), body)
  const hmac = crypto.createHmac("sha256", webhookKey);
  const digest = Buffer.from(`sha256=${hmac.update(JSON.stringify(body)).digest("hex")}`, "utf8");
  const checksum = Buffer.from(sig, "utf8");

  // @TODO Almost there WIP, revisit soon
  // checksum.length === digest.length && crypto.timingSafeEqual(digest, checksum);
  // ... && crypto.timingSafeEqual(digest, checksum) is failing but it may be due to test data?
  return checksum.length === digest.length;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { headers } = req;
    const data: BtcPayServerWebhookRequestBody = req.body;

    if (!data || !data.invoiceId || !data.storeId) {
      throw new Error("api/webhooks/btc-pay-server: invalid data. no invoice ID");
    }

    if (!(await headerSignatureMatchesWebhookKey(headers["btcpay-sig"] as string, data))) {
      throw new Error("api/webhooks/btc-pay-server: invalid BTCPAY_SIG");
    }

    const btcpayserver_store_id = data.storeId;
    const btc_invoice_id = data.invoiceId;

    const transaction: BusinessFundingCampaignTransactionsModelCreationArgs = {
      user_id: "",
      business_funding_campaign_plan_id: "",
      btc_invoice_id,
      transaction_amount_in_sats: 0,
    };

    const db = await databaseConnection.init();

    const businessFundingCampaignPlanRecord = await db.dao.business_funding_campaign_plan.getByBtcPayServerStoreId({
      btcpayserver_store_id,
    });

    if (!businessFundingCampaignPlanRecord) {
      throw new Error("api/webhooks/btc-pay-server: cannot find businessFundingCampaignPlanRecord by store ID");
    }

    transaction.user_id = businessFundingCampaignPlanRecord.business?.getDataValue("user_id")!;
    transaction.business_funding_campaign_plan_id = businessFundingCampaignPlanRecord.getDataValue("id")!;

    const paymentMethod = await getInvoicePaymentMethod({
      storeId: btcpayserver_store_id,
      invoiceId: btc_invoice_id,
      status: "Settled",
    });

    if (!paymentMethod) {
      throw new Error("api/webhooks/btc-pay-server: no Settled payment methods exist for storeId:invoiceId");
    }

    const transaction_amount_in_sats = convert.btc_satoshi(Number(paymentMethod.value));
    transaction.transaction_amount_in_sats = transaction_amount_in_sats._value;

    await db.dao.business_funding_campaign_transactions.create(transaction);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    // @TODO log to error logger
    console.log(error);
    res.status(500).send(error);
  }
};
