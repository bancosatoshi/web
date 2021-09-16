export type Styles = {
  'wallet-selector': string;
  'wallet-selector__balance': string;
  'wallet-selector__button': string;
  'wallet-selector__chain-network-dropdowns': string;
  'wallet-selector__connect': string;
  'wallet-selector__widget': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
