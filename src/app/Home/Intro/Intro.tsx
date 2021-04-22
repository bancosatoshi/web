import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-grid-system";
import { Button } from "../../../ui/button/Button";
import { NavBar } from "../../../ui/navbar/NavBar";
import styles from "./Intro.module.scss";
import { IntroProps } from "./Intro.types";

export const Intro: React.FC<IntroProps> = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  const getContactURL = () => {
    switch (locale) {
      case "es":
        return "https://13iqht6lpij.typeform.com/to/wvwrL9cd";
      case "en":
        return "https://13iqht6lpij.typeform.com/to/wvwrL9cd";
      default:
        return "https://13iqht6lpij.typeform.com/to/wvwrL9cd";
    }
  };

  return (
    <section id="intro" className={clsx(styles["intro"])}>
      <NavBar />
      <div>
        <Container>
          <Row>
            <Col lg={5}>
              <h1 className={clsx(styles["intro__heading"])}>
                <span>{t("intro.h1.top")}</span>
                <span>{t("intro.h1.main")}</span>
              </h1>
              <h2>{t("intro.h2.text.1")}</h2>
              <div className={clsx(styles["intro__actions"])}>
                <Link href={getContactURL()}>
                  <a target="_blank" rel="nofollow">
                    <Button>{t("intro.button.contact")}</Button>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={clsx(styles["intro__background-image"])} />
    </section>
  );
};
