import clsx from "clsx";
import { LocaleSelectorProps } from "./LocaleSelector.types";
import styles from "./LocaleSelector.module.scss";
import { useCallback, useEffect, useState } from "react";
import { Typography } from "ui/typography/Typography";
import { Icon } from "ui/icon/Icon";
import { useRouter } from "next/router";

export const LocaleSelector: React.FC<LocaleSelectorProps> = ({ children, className }) => {
  const { locale, locales, asPath } = useRouter();
  const [nextLocale, setNextLocale] = useState<string | undefined>(undefined);

  const getNextLocale = useCallback(() => {
    if (locales && locale) {
      const currentLocaleIndex = locales.indexOf(locale);
      setNextLocale(locales[currentLocaleIndex + 1] ? locales[currentLocaleIndex + 1] : locales[0]);
    }
  }, []);

  useEffect(() => {
    getNextLocale();
  }, []);

  return (
    <>
      <div className={clsx(styles["locale-selector"], className)}>
        <Typography.Link href={asPath} locale={nextLocale}>
          <Icon name="icon-network" /> {nextLocale}
        </Typography.Link>
      </div>
      {children}
    </>
  );
};
