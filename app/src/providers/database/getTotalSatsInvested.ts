import { BusinessFundingCampaignTransactionsModel } from "@bancosatoshi/database/business/model";

export default (transactions: BusinessFundingCampaignTransactionsModel[]) =>
  transactions.reduce((prev, curr) => prev + curr.getDataValue("transaction_amount_in_sats"), 0);
