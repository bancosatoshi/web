import clsx from "clsx";
import { Col, Container, Row } from "react-grid-system";
import { Button } from "../../../ui/button/Button";
import { NavBar } from "../../../ui/navbar/NavBar";
import styles from "./Intro.module.scss";
import { IntroProps } from "./Intro.types";

export const Intro: React.FC<IntroProps> = () => {
  return (
    <section id="intro" className={clsx(styles["intro"])}>
      <NavBar />
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className={clsx(styles["intro__heading"])}>
                <span>Líderes en</span>
                <span>Estrategia DeFi</span>
              </h1>
              <h2>
                Orientación especializada en Finanzas Descentralizadas
                <br />
                (DeFi) para negocios de todos los tamaños
                <br />
                de todas las regiones del mundo.
              </h2>
              <div className={clsx(styles["intro__actions"])}>
                <Button>Contacto</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={clsx(styles["intro__background-image"])} />
    </section>
  );
};
