export type Styles = {
  properties__main: string;
  "properties__main-panel": string;
  "properties__main-panel--container": string;
  "properties__my-properties--card": string;
  properties__sidebar: string;
  "properties__tab-pane--container": string;
  "z-depth-0": string;
  "z-depth-1": string;
  "z-depth-1-half": string;
  "z-depth-2": string;
  "z-depth-3": string;
  "z-depth-4": string;
  "z-depth-5": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
