import clsx from "clsx";
import { CampaignFinancialsProps } from "./CampaignFinancials.types";
import styles from "./CampaignFinancials.module.scss";
import { FundingProgressBar } from "./FundingProgressBar/FundingProgressBar";

export const CampaignFinancials: React.FC<CampaignFinancialsProps> = ({ className, campaign }) => {
  return (
    <div className={clsx(styles["campaign-financials"], className)}>
      <FundingProgressBar
        min={campaign.minFundingInUSD}
        max={campaign.maxFundingInUSD}
        funded={campaign.totalSatsInvested}
      />
    </div>
  );
};
