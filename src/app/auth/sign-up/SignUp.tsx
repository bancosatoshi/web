import clsx from "clsx";

import { Card } from "../../../ui/card/Card";
import { Grid } from "../../../ui/grid/Grid";
import { Form } from "../../../ui/form/Form";
import { Button } from "../../../ui/button/Button";
import { Typography } from "../../../ui/typography/Typography";

import { SignUpProps } from "./SignUp.types";
import styles from "./SignUp.module.scss";

export const SignUp: React.FC<SignUpProps> = ({ className }) => (
  <div className={clsx(styles["sign-up"], className)}>
    <Grid>
      <Grid.Container>
        <Grid.Row align="center" justify="center" nowrap>
          <Grid.Col lg={4}>
            <Card shadow>
              <Card.Content>
                <div className={styles["sign-up__instructions"]}>
                  <Typography.Headline3>Ingresa Sin Contraseña</Typography.Headline3>
                  <Typography.Subtitle>
                    Enviaremos un correo a tu bandeja de entrada con las instrucciones.
                  </Typography.Subtitle>
                </div>
                <Form>
                  <Form.TextInput autoFocus label="Correo Electrónico" id="email" type="email" />
                  <Card.Actions>
                    <Button variant="outlined">Ingresar con correo</Button>
                  </Card.Actions>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Grid>
  </div>
);
