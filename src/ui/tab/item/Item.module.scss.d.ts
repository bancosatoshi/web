export type Styles = {
  item: string;
  item__active: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
