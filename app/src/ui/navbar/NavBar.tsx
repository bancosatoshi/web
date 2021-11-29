import { Col, Container, Row } from "react-grid-system";

import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { Typography } from "../typography/Typography";
import { useRoutes } from "hooks/useRoutes/useRoutes";
import { BancoSatoshiLogo } from "ui/icons/BancoSatoshiLogo";

import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types";
import { Icon } from "ui/icon/Icon";
import clsx from "clsx";

export const NavBar: React.FC<NavBarProps> = () => {
  const auth = useAuthContext();
  const routes = useRoutes();

  return (
    <div className={styles.navbar}>
      <Container>
        <Row>
          <Col lg={3} xs={6} sm={6}>
            <div className={styles.navbar__logo}>
              <Typography.Link href={routes.home}>
                <BancoSatoshiLogo />
              </Typography.Link>
            </div>
          </Col>
          <Col lg={6} xs={6} sm={6}>
            <div className={styles.navbar__center}>
              <div className={clsx(styles["navbar__center--item"], styles["navbar__center--item-dropdown"])}>
                <Typography.Link href={routes.invest.grid}>Sala de Inversión</Typography.Link>
                <div className={clsx(styles["navbar__dropdown"], "dropdown")}>
                  <Typography.Link className={styles["navbar__dropdown--item"]} href={routes.invest.map}>
                    <div className={styles["navbar__dropdown--item-icon"]}>
                      <Icon name="icon-map2" />
                    </div>
                    <div className={styles["navbar__dropdown--item-text"]}>
                      <Typography.Text>Mapa</Typography.Text>
                    </div>
                  </Typography.Link>
                  <Typography.Link className={styles["navbar__dropdown--item"]} href={routes.invest.data}>
                    <div className={styles["navbar__dropdown--item-icon"]}>
                      <Icon name="icon-file-stats" />
                    </div>
                    <div className={styles["navbar__dropdown--item-text"]}>
                      <Typography.Text>Tabla</Typography.Text>
                    </div>
                  </Typography.Link>
                  <Typography.Link className={styles["navbar__dropdown--item"]} href={routes.invest.grid}>
                    <div className={styles["navbar__dropdown--item-icon"]}>
                      <Icon name="icon-grid" />
                    </div>
                    <div className={styles["navbar__dropdown--item-text"]}>
                      <Typography.Text>Grid</Typography.Text>
                    </div>
                  </Typography.Link>
                </div>
              </div>
              <div className={styles["navbar__center--item"]}>
                <Typography.Text>Cómo Funciona</Typography.Text>
              </div>
              <div className={styles["navbar__center--item"]}>
                <Typography.Text>Accede a Capital</Typography.Text>
              </div>
            </div>
          </Col>
          <Col lg={3} xs={6} sm={6}>
            <div className={styles.navbar__right}>
              <div className={styles["navbar__right--item"]}>
                {auth.hasActiveSession ? (
                  <Typography.Text>Mi Cuenta</Typography.Text>
                ) : (
                  <Typography.Link href={routes.auth.signIn}>Iniciar Sesión</Typography.Link>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
