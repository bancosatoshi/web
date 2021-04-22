import Link from "next/link";
import { useRouter } from "next/router";
import { ReactChild, useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { AufacicentaLogo } from "../icons/AufacicentaLogo";
import { GloveIcon } from "../icons/GloveIcon";
import styles from "./NavBar.module.scss";

export const NavBar: React.FC<{ children?: ReactChild }> = ({ children }) => {
  const { locale, locales } = useRouter();
  const [nextLocale, setNextLocale] = useState(undefined);

  const getNextLocale = () => {
    const currentLocaleIndex = locales.indexOf(locale);
    setNextLocale(locales[currentLocaleIndex + 1] ? locales[currentLocaleIndex + 1] : locales[0]);
  };

  useEffect(() => {
    getNextLocale();
  });

  return (
    <>
      <div className={styles.navbar}>
        <Container>
          <Row justify="between">
            <Col lg={3}>
              <div className={styles.navbar__logo}>
                <a href="#">
                  <AufacicentaLogo />
                </a>
              </div>
            </Col>
            <Col lg={2}>
              <div className={styles.navbar__right}>
                {children && children}
                <div className={styles["navbar__language-selector"]}>
                  <Link href="/" locale={nextLocale}>
                    <a>
                      <GloveIcon /> {nextLocale}
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
