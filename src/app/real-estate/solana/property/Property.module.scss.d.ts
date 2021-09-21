export type Styles = {
  property: string;
  property__attachments: string;
  "property__attachments--card": string;
  "property__attachments--content": string;
  "property__attachments--overlay": string;
  "property__attachments--overlay-text": string;
  property__details: string;
  property__location: string;
  "property__location--map": string;
  "property__location--overlay": string;
  "property__location--overlay-text": string;
  property__main: string;
  "property__main-panel--container": string;
  property__media: string;
  "property__media--single-image": string;
  "property__ownership--card": string;
  "property__register-interest-modal--header": string;
  property__sidebar: string;
  "property__sidebar--heading": string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
