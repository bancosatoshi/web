export type Styles = {
  property: string;
  property__details: string;
  "property__location--map": string;
  property__main: string;
  "property__main-panel--container": string;
  property__media: string;
  "property__media--single-image": string;
  "property__ownership--card": string;
  property__sidebar: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
