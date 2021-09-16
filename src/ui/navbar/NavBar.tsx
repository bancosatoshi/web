import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { AufacicentaLogo } from "../icons/AufacicentaLogo";
import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types";

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const { locale, locales } = useRouter();
  const [nextLocale, setNextLocale] = useState(undefined);

  const getNextLocale = () => {
    const currentLocaleIndex = locales!.indexOf(locale!);
    setNextLocale(locales[currentLocaleIndex + 1] ? locales[currentLocaleIndex + 1] : locales[0]);
  };

  useEffect(() => {
    getNextLocale();
  });

  return (
    <div className={styles.navbar}>
      <Container fluid>
        <Row justify="between">
          <Col lg={3} xs={6} sm={6}>
            <div className={styles.navbar__logo}>
              <a href="#">
                <AufacicentaLogo className={styles["navbar__logo--color"]} />
              </a>
            </div>
          </Col>
          <Col lg={2} xs={6} sm={6}>
            <div className={styles.navbar__right}>
              {children && children}
              {/* <div className={styles["navbar__language-selector"]}>
                <Link href="/" locale={nextLocale}>
                  <a>
                    <GloveIcon /> {nextLocale}
                  </a>
                </Link>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
