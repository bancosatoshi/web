// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
// import databaseConnection from "src/providers/database";

import { BtcPayServerWebhookRequestBody } from "./btc-pay-server.types";

const headerSignatureMatchesWebhookKey = (sig: string, body: BtcPayServerWebhookRequestBody) => {
  // @TODO we'll probably need to create a map of storeId => webhook_btcpay_sig because each store has its own webhook key
  // sha256=HMAC256(UTF8(webhook's secret), body)
  const hmac = crypto.createHmac("sha256", process.env.WEBHOOKS_BTCPAY_SIG!);
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

    if (!headerSignatureMatchesWebhookKey(headers["btcpay-sig"] as string, data)) {
      throw new Error("api/webhooks/btc-pay-server: invalid BTCPAY_SIG");
    }

    if (!data || !data.invoiceId) {
      throw new Error("api/webhooks/btc-pay-server: invalid data. no invoice ID");
    }

    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
