import { ThemeContextController } from "context/theme/ThemeContextController";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { setConfiguration } from "react-grid-system";
import "../theme/globals.scss";

setConfiguration({ containerWidths: [540, 740, 960, 1140], gutterWidth: 32 });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextController>
      <Component {...pageProps} />
    </ThemeContextController>
  );
}

export default appWithTranslation(MyApp);
