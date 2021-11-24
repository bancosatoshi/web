import React, { useState } from "react";

import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { useToastContext } from "hooks/useToastContext/useToastContext";
import { Typography } from "ui/typography/Typography";

import { CheckoutContext } from "./CheckoutContext";
import { BTCPayCheckoutOptions, CheckoutContextControllerProps, CheckoutState } from "./CheckoutContext.types";

export const CheckoutContextController = ({ children }: CheckoutContextControllerProps) => {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const auth = useAuthContext();
  const toast = useToastContext();

  const getCheckoutURL = async ({ checkout }: BTCPayCheckoutOptions) => {
    try {
      setIsLoading(true);

      // @TODO get businessId from business mcs
      const businessId = "6e39hBHXvVwWvJUhSb2wKoBden7Ze4zrEDmq3F3f3Gex";
      const buyerEmail = auth.session?.user?.email;

      // @TODO get store id from business mcs
      const storeId = "6e39hBHXvVwWvJUhSb2wKoBden7Ze4zrEDmq3F3f3Gex";

      const metadata = { businessId, buyerEmail };

      const response = await fetch(`/api/getCheckoutURL`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ metadata, storeId, checkout }),
      });

      const content = await response.json();

      if (!content?.checkoutLink) {
        throw new Error("Invalid BTC checkout content at CheckoutContextController:getCheckoutURL");
      }

      setCheckoutState({
        url: content.checkoutLink,
      });

      setIsLoading(false);
    } catch (error_) {
      // @TODO handle error
      console.log(error_);

      setError(
        "Error at CheckoutContextController:getCheckoutURL. Check server logs as this may have happened in the API side.",
      );

      setIsLoading(false);

      // @TODO i18n
      toast.trigger({
        variant: "error",
        title: "Error",
        withTimeout: false,
        children: <Typography.Text>No pudimos generar un link de depósito de BTC. Intenta de nuevo.</Typography.Text>,
      });
    }
  };

  return (
    <CheckoutContext.Provider value={{ getCheckoutURL, checkoutState, isLoading, error }}>
      {children}
    </CheckoutContext.Provider>
  );
};
