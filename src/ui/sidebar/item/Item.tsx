import clsx from "clsx";
import { Col, Container, Row } from "react-grid-system";
import styles from "./Item.module.scss";
import { ItemProps } from "./Item.types";

export const Item: React.FC<ItemProps> = ({ children, className, text, icon }) => {
  return (
    <div className={clsx(styles["item"], className)}>
      <Container>
        <Row>
          {icon && (
            <Col lg={1}>
              <span className={styles["item__icon--wrapper"]}>{icon}</span>
            </Col>
          )}
          <Col>{text && <span className={styles["item__text--wrapper"]}>{text}</span>}</Col>
        </Row>
      </Container>
    </div>
  );
};
