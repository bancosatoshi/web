import { Col, Container, Hidden, Row } from "react-grid-system";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Locale } from "src/types/Locale";
import { Sidetab } from "@typeform/embed-react";

import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { Typography } from "../typography/Typography";
import { useRoutes } from "hooks/useRoutes/useRoutes";
import { BancoSatoshiLogo } from "ui/icons/BancoSatoshiLogo";
import { Icon } from "ui/icon/Icon";

import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types";

export const NavBar: React.FC<NavBarProps> = () => {
  const auth = useAuthContext();
  const routes = useRoutes();
  const { locale } = useRouter();
  const { session, handleLogout } = useAuthContext();
  const { t } = useTranslation("common");

  const embedFormConfig = {
    formID: (locale as Locale) === "es" ? "tMiwThZS" : "ycYIXjXb",
    buttonText: t("typeformEmbedForm.buttonLabel"),
  };

  const getUserNickname = () => {
    const userEmail = session?.user?.email;
    const userNickname = userEmail?.slice(0, 2).toUpperCase();

    return userNickname;
  };

  return (
    <div className={styles.navbar}>
      <Container>
        <Row>
          <Col lg={3} sm={3} xs={6}>
            <div className={styles.navbar__logo}>
              <Typography.Link href={routes.home}>
                <BancoSatoshiLogo />
              </Typography.Link>
            </div>
          </Col>
          <Hidden xs>
            <Col lg={6} sm={6} xs={6}>
              <div className={styles.navbar__center} />
            </Col>
          </Hidden>
          <Col lg={3} sm={3} xs={6}>
            <div className={styles.navbar__right}>
              <div className={styles["navbar__right--item"]}>
                {auth.hasActiveSession ? (
                  <div className={styles["navbar__account-widget"]}>
                    <Typography.Text>{getUserNickname()}</Typography.Text>
                    <div className={clsx(styles.navbar__dropdown, "dropdown")}>
                      <div
                        className={styles["navbar__dropdown--item"]}
                        onClick={handleLogout}
                        onKeyPress={handleLogout}
                        role="button"
                        tabIndex={0}
                      >
                        <div className={styles["navbar__dropdown--item-icon"]}>
                          <Icon name="icon-exit" />
                        </div>
                        <div className={styles["navbar__dropdown--item-text"]}>
                          <Typography.Text>{t("navbar.logout")}</Typography.Text>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Typography.Link href={routes.auth.signIn}>{t("navbar.signIn")}</Typography.Link>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Sidetab id={embedFormConfig.formID} buttonText={embedFormConfig.buttonText} buttonColor="var(--color-primary)" />
    </div>
  );
};
