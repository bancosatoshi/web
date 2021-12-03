import clsx from "clsx";
import { Container } from "react-grid-system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Card } from "ui/card/Card";
import { Typography } from "ui/typography/Typography";
import { Grid } from "ui/grid/Grid";
import { Button } from "ui/button/Button";
import { Icon } from "ui/icon/Icon";
import { Tooltip } from "ui/tooltip/Tooltip";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { useRoutes } from "hooks/useRoutes/useRoutes";
import { useCheckoutContext } from "hooks/useCheckoutContext/useCheckoutContext";

import { InvestNowWidgetProps } from "./InvestNowWidget.types";
import styles from "./InvestNowWidget.module.scss";
import getDefaultDateFormat from "providers/date/getDefaultDateFormat";
import convert from "providers/currency/convert";
import formatFiatCurrency from "providers/currency/formatFiatCurrency";

export const InvestNowWidget: React.FC<InvestNowWidgetProps> = ({ className, campaign }) => {
  const auth = useAuthContext();
  const router = useRouter();
  const routes = useRoutes();
  const { getCheckoutURL, checkoutState, isLoading: isCheckoutLoading, error: checkoutError } = useCheckoutContext();
  const [totalFunded, setTotalFunded] = useState(0);

  useEffect(() => {
    (async () => {
      const btcFunded = convert.satoshi_btc(campaign.totalSatsInvested);
      const conversion = await convert.btc_usd(btcFunded);

      setTotalFunded(conversion);
    })();
  }, [campaign.totalSatsInvested]);

  useEffect(() => {
    if (!checkoutState?.url) {
      return;
    }

    router.push(checkoutState.url);
  }, [checkoutState, router]);

  const handleOnInvestNowClick = () => {
    if (auth.hasActiveSession) {
      getCheckoutURL({
        checkout: { redirectURL: `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}` },
        campaign,
      });
    } else {
      router.push(`${routes.auth.signIn}?redirectTo=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`);
    }
  };

  const content = campaign.content;

  return (
    <div className={clsx(styles["invest-now-widget"], className)}>
      <Container>
        <Grid.Row>
          <Grid.Col lg={4} offset={{ lg: 8 }} className={styles["invest-now-widget__fixed-col"]}>
            <Card shadow>
              <Card.Content>
                <div className={styles["invest-now-widget__risk-level"]}>
                  <Tooltip.Wrapper>
                    <Typography.Description>Nivel de Riesgo: Medio</Typography.Description>
                    <Tooltip
                      title="Nivel de Riesgo Medio"
                      description={`${content.title} tiene una edad de 2 años. Tiene libros contables en orden y tiene un score 8.5 de 10 en el Protocolo de Inversión.`}
                    />
                  </Tooltip.Wrapper>
                </div>
                <hr />
                <Typography.Headline3 className={styles["invest-now-widget__cta-text"]}>
                  Invierte en {content.title}
                </Typography.Headline3>
                <div className={styles["invest-now-widget__cta-button"]}>
                  <Button fullWidth onClick={handleOnInvestNowClick} isLoading={isCheckoutLoading}>
                    {auth.hasActiveSession ? "Depositar BTC" : "Ingresa y Deposita BTC"}
                    <Icon name="icon-power" className={styles["invest-now-widget__cta-button--icon"]} />
                  </Button>
                  {checkoutError && (
                    <Typography.Description className={styles["invest-now-widget__cta-button--error"]}>
                      Algo salió mal, intenta de nuevo
                    </Typography.Description>
                  )}
                </div>
                <div className={styles["invest-now-widget__goal"]}>
                  <div>
                    <Tooltip.Wrapper>
                      <Typography.Headline4 className={styles["invest-now-widget__goal--heading"]}>
                        <Icon name="icon-rotation-lock" /> {campaign.investmentMultiple}x
                      </Typography.Headline4>
                      <Tooltip
                        title="ROI"
                        description={`Si inviertes 10 SAT, ${content.title} se compromete a devolverte ${
                          10 * campaign.investmentMultiple
                        } SAT a lo largo de la vida útil del acuerdo: ${getDefaultDateFormat(campaign.maturityDate)}.`}
                      />
                    </Tooltip.Wrapper>
                    <Typography.Description className={styles["invest-now-widget__goal--text"]}>
                      Retorno sobre tu inversión
                    </Typography.Description>
                  </div>
                  <div>
                    <Typography.Headline4 className={styles["invest-now-widget__goal--heading"]}>
                      <Icon name="icon-bag-dollar" /> {campaign.totalSatsInvested} SAT
                    </Typography.Headline4>
                    <Typography.Description className={styles["invest-now-widget__goal--text"]}>
                      Invertidos hasta hoy: {formatFiatCurrency(totalFunded)} USD
                    </Typography.Description>
                  </div>
                  <div>
                    <Typography.Headline4 className={styles["invest-now-widget__goal--heading"]}>
                      <Icon name="icon-users" /> {campaign.totalInvestors}
                    </Typography.Headline4>
                    <Typography.Description className={styles["invest-now-widget__goal--text"]}>
                      Inversionistas
                    </Typography.Description>
                  </div>
                  <div>
                    <Typography.Headline4 className={styles["invest-now-widget__goal--heading"]}>
                      <Icon name="icon-timer" /> {campaign.daysLeft} días
                    </Typography.Headline4>
                    <Typography.Description className={styles["invest-now-widget__goal--text"]}>
                      Restantes para invertir
                    </Typography.Description>
                  </div>
                </div>
                <div className={styles["invest-now-widget__warnings"]}>
                  <div>
                    <Typography.Description className={styles["invest-now-widget__warnings--text"]}>
                      <strong>Volatilidad 0</strong>
                    </Typography.Description>
                    <Typography.Description className={styles["invest-now-widget__warnings--text"]}>
                      Tu depósito estará respaldado en un <strong>Stable Coin Escrow</strong> hasta cumplir la meta de
                      inversión.
                    </Typography.Description>
                  </div>
                  <div>
                    <Typography.Description className={styles["invest-now-widget__warnings--text"]}>
                      <strong>Periodo de Maduración</strong>
                    </Typography.Description>
                    <Typography.Description className={styles["invest-now-widget__warnings--text"]}>
                      Por ejemplo, si inviertes 10 SAT, {content.title} se compromete a devolverte{" "}
                      {10 * campaign.investmentMultiple} SAT durante la vida útil del acuerdo:{" "}
                      <strong>{getDefaultDateFormat(campaign.maturityDate)}.</strong>
                    </Typography.Description>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  );
};
