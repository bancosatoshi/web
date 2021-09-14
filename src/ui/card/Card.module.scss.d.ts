export type Styles = {
  'card': string;
  'card__background-image': string;
  'card__content': string;
  'card__link': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
