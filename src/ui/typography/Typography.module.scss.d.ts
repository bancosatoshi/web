export type Styles = {
  'typography': string;
  'typography__button-label': string;
  'typography__description': string;
  'typography__headline1': string;
  'typography__headline2': string;
  'typography__headline3': string;
  'typography__headline4': string;
  'typography__headline5': string;
  'typography__headline6': string;
  'typography__mini-button-label': string;
  'typography__mini-description': string;
  'typography__subtitle': string;
  'typography__text': string;
  'typography__text-bold': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
