export type Styles = {
  pane: string;
  pane__active: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
