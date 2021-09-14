export type Styles = {
  'home': string;
  'home__main-panel': string;
  'home__my-properties--card': string;
  'home__sidebar': string;
  'home__tab-pane--container': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
