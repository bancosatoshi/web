import { ReactNode } from "react";

export type CheckoutContextControllerProps = {
  children: ReactNode;
};

// https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_CreateInvoice
export type BTCPayCheckoutOptions = {
  checkout: {
    redirectURL: string;
  };
};

export type CheckoutState =
  | {
      url: string | undefined;
    }
  | undefined;

export type CheckoutContextType = {
  getCheckoutURL: (args: BTCPayCheckoutOptions) => Promise<void>;
  checkoutState: CheckoutState;
  isLoading: boolean;
  error: string | undefined;
};
