// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import databaseConnection from "src/providers/database";

import { BtcPayServerWebhookRequestBody } from "./btc-pay-server.types";

const headerSignatureMatchesWebhookKey = (sig: string) => {
  // @TODO we'll probably need to create a map of storeId => webhook_btcpay_sig because each store has its own webhook key
  const serverKey = crypto.createHmac("sha256", process.env.WEBHOOKS_BTCPAY_SIG!).update("json").digest("base64");

  // @TODO: The endpoint receiving the payload must validate the payload by checking that the HTTP header BTCPAY-SIG of the callback matches the HMAC256 of the secret on the payload's body bytes.
  return true;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { headers } = req;

    if (!headerSignatureMatchesWebhookKey(headers["btcpay-sig"] as string)) {
      throw new Error("api/webhooks/btc-pay-server: invalid BTCPAY_SIG");
    }

    const data: BtcPayServerWebhookRequestBody = req.body;

    if (!data || !data.invoiceId) {
      throw new Error("api/webhooks/btc-pay-server: invalid data. no invoice ID");
    }

    const database = await databaseConnection.init();

    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
