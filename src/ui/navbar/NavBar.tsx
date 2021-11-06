import { Col, Container, Row } from "react-grid-system";

import { Typography } from "../typography/Typography";

import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types";

export const NavBar: React.FC<NavBarProps> = ({ children }) => (
  <div className={styles.navbar}>
    <Container>
      <Row justify="between">
        <Col lg={3} xs={6} sm={6}>
          <div className={styles.navbar__logo}>
            <Typography.Headline6>Banco Satoshi</Typography.Headline6>
          </div>
        </Col>
        <Col lg={2} xs={6} sm={6}>
          <div className={styles.navbar__right}>{children && children}</div>
        </Col>
      </Row>
    </Container>
  </div>
);
