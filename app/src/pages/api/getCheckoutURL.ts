// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

import { BTCPayInvoiceMetadata } from "context/checkout/CheckoutContext.types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const metadata: BTCPayInvoiceMetadata = {
      businessId: req.body.metadata.businessId,
      buyerEmail: req.body.metadata.buyerEmail,
      campaignId: req.body.metadata.campaignId,
    };

    const { storeId, checkout } = req.body;
    const defaultLanguage = checkout.locale === "es" ? "es-ES" : "en";

    const endpoint = `${process.env.BTC_PAY_SERVER_BASE_URL}/stores/${storeId}/invoices`;

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `token ${process.env.BTC_PAY_SERVER_AUTH_TOKEN}`,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        metadata,
        checkout: { redirectUrl: `${checkout.redirectURL}?invoiceId={InvoiceId}&orderId={OrderId}`, defaultLanguage },
      }),
    });

    const content = await response.json();

    if (!content?.checkoutLink) {
      throw new Error("Invalid BTC checkout content at API:getCheckoutURL");
    }

    res.status(200).json({
      checkoutLink: content.checkoutLink,
    });
  } catch {
    // @TODO log error
    res.status(500);
  }
};
