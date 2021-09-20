export type Styles = {
  properties__main: string;
  "properties__main-panel": string;
  "properties__main-panel--container": string;
  "properties__my-properties--card": string;
  properties__sidebar: string;
  "properties__tab-pane--container": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
