export type Styles = {
  "wallet-selector": string;
  "wallet-selector__balance": string;
  "wallet-selector__button--disable-hover": string;
  "wallet-selector__chain-network-dropdowns": string;
  "wallet-selector__chain-network-dropdowns--chains-list": string;
  "wallet-selector__chain-network-dropdowns--chains-list-card": string;
  "wallet-selector__chain-network-dropdowns--networks-list": string;
  "wallet-selector__chain-network-dropdowns--networks-list-card": string;
  "wallet-selector__connect": string;
  "wallet-selector__widget": string;
  "wallet-selector__widget--backdrop": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
