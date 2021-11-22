import { GetStaticPropsContext, NextPage } from "next";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { BusinessDetailsProps } from "app/business/BusinessDetails/BusinessDetails.types";
import { CheckoutContextController } from "context/checkout/CheckoutContextController";
import { getPageContentByBusinessCampaignSlug } from "lib/wordpress/getPageContentBySlug";

const Index: NextPage<BusinessDetailsProps> = ({ content }) => (
  <AppLayout>
    <AuthLayout>
      <CheckoutContextController>
        {/* @TODO We may need to rename this to BusinessCampaignContainer */}
        <BusinessDetailsContainer content={content} />
      </CheckoutContextController>
    </AuthLayout>
  </AppLayout>
);

export async function getStaticPaths() {
  return { paths: [{ params: { campaignSlug: "el-comalote-gt" } }], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params!.campaignSlug;

  const content = await getPageContentByBusinessCampaignSlug(slug as string);

  return { props: { content } };
}

export default Index;
