export type Styles = {
  item: string;
  "item__icon--wrapper": string;
  "item__text--wrapper": string;
  item__url: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
