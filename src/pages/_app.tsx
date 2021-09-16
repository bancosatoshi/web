import { appWithTranslation } from "next-i18next";
import { setConfiguration } from "react-grid-system";
import "../theme/editor/code-editor-dark.scss";
import "../theme/globals.scss";

setConfiguration({ containerWidths: [540, 740, 960, 1360, 1540], gutterWidth: 32 });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
