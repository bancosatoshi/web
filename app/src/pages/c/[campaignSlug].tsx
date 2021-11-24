import { NextPage } from "next";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { BusinessDetailsProps } from "app/business/BusinessDetails/BusinessDetails.types";
import { CheckoutContextController } from "context/checkout/CheckoutContextController";

const Index: NextPage<BusinessDetailsProps> = () => (
  <AppLayout>
    <AuthLayout>
      <CheckoutContextController>
        {/* @TODO We may need to rename this to BusinessCampaignContainer */}
        <BusinessDetailsContainer />
      </CheckoutContextController>
    </AuthLayout>
  </AppLayout>
);

export async function getStaticPaths() {
  // @TODO get all active campaigns' slug and render dynamically
  return { paths: [{ params: { campaignSlug: "el-comalote-gt" } }], fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}

export default Index;
