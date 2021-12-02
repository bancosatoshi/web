import clsx from "clsx";
import { FundingProgressBarProps } from "./FundingProgressBar.types";
import styles from "./FundingProgressBar.module.scss";
import { useEffect, useState } from "react";
import convert from "providers/currency/convert";
import formatFiatCurrency from "providers/currency/formatFiatCurrency";
import { Typography } from "ui/typography/Typography";
import { Card } from "ui/card/Card";

export const FundingProgressBar: React.FC<FundingProgressBarProps> = ({ className, funded, min, max }) => {
  const [progress, setProgress] = useState(0);
  const [totalFunded, setTotalFunded] = useState(0);
  const [minProgress, setMinProgress] = useState(0);

  useEffect(() => {
    (async () => {
      const btcFunded = convert.satoshi_btc(funded);
      const conversion = await convert.btc_usd(btcFunded);

      setTotalFunded(conversion);
      setProgress((conversion / max) * 100);
      setMinProgress((min / max) * 100);
    })();
  }, [funded]);

  return (
    <>
      <Typography.Headline6>BTC Recaudado</Typography.Headline6>
      <Card shadow className={styles["funding-progress-bar__card"]}>
        <div className={styles["funding-progress-bar__digits"]}>
          <Typography.Text className={styles["funding-progress-bar__digits--min"]} style={{ width: `${minProgress}%` }}>
            {formatFiatCurrency(min)} min.
          </Typography.Text>
          <Typography.Text className={styles["funding-progress-bar__digits--max"]}>
            {formatFiatCurrency(max)} max.
          </Typography.Text>
        </div>
        <div className={clsx(styles["funding-progress-bar"], className)}>
          <Typography.Text className={styles["funding-progress-bar__funded-amount"]}>
            {formatFiatCurrency(totalFunded)} recaudado
          </Typography.Text>
          <div className={styles["funding-progress-bar__funded-bar"]} style={{ width: `${progress}%` }}></div>
        </div>
      </Card>
    </>
  );
};
