import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppLayoutProps } from "./AppLayout.types";

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  useEffect(() => {
    // @todo set with a toggle button from navbar or footer
    document.body.dataset.theme = "dark";
  }, []);

  return (
    <>
      <Head>
        <title>{t("head.og.title")}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://use.typekit.net/wrf5blq.css" />
        <meta name="description" content={t("head.og.description")} />
        <meta property="og:title" content={t("head.og.title")} />
        <meta property="og:description" content={t("head.og.description")} />
        <meta property="og:image" content={`/shared/og-image_${locale}.png`} />
        <meta property="og:url" content="https://aufacicenta.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale} />
      </Head>
      {children}
    </>
  );
};
