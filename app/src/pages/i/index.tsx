import { GetStaticPropsContext, NextPage } from "next";

import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { CampaignsGridContainer } from "app/campaigns-grid/CampaignsGridContainer";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BusinessCampaigns: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <CampaignsGridContainer />
    </AuthLayout>
  </AppLayout>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  await i18n?.reloadResources();

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "i", "head"])),
    },
  };
};

export default BusinessCampaigns;
