// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
// import databaseConnection from "src/providers/database";

import { BtcPayServerWebhookRequestBody } from "./btc-pay-server.types";

const headerSignatureMatchesWebhookKey = () => true;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!headerSignatureMatchesWebhookKey()) {
      throw new Error("api/webhooks/btc-pay-server: invalid BTCPAY_SIG");
    }

    const data: BtcPayServerWebhookRequestBody = req.body;

    if (!data || !data.invoiceId) {
      throw new Error("api/webhooks/btc-pay-server: invalid data. no invoice ID");
    }

    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
