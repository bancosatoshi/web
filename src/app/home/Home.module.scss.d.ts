export type Styles = {
  'home': string;
  'home__main-panel': string;
  'home__sidebar': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
