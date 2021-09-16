export type Styles = {
  'list-property': string;
  'list-property__attachments': string;
  'list-property__editor': string;
  'list-property__main-panel--container': string;
  'list-property__special-attributes--card': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
