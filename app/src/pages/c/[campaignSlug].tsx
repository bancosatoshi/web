import { GetStaticPropsContext, NextPage } from "next";
import WPAPI from "wpapi";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { BusinessDetailsProps } from "app/business/BusinessDetails/BusinessDetails.types";
import { CheckoutContextController } from "context/checkout/CheckoutContextController";

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

const getPageContentByBusinessCampaignSlug = async (slug: string) => {
  try {
    const wp = new WPAPI({ endpoint: "https://cms.bancosatoshi.com/wp-json" });

    const pages = await wp.pages().param("embed").slug(slug);

    if (!pages.length) {
      // @TODO do something with an empty page content
    }

    const [page] = pages;

    const media = await wp.media().id(page.featured_media);

    return {
      asHtmlString: page.content.rendered,
      title: page.title.rendered,
      description: page?.custom_fields?.description,
      category: page?.custom_fields?.category,
      establishedAt: page?.custom_fields?.established_at,
      country: page?.custom_fields?.country,
      latitude: page?.custom_fields?.latitude,
      longitude: page?.custom_fields?.longitude,
      instagram: page?.custom_fields?.instagram,
      website: page?.custom_fields?.website,
      markerIcon: page?.custom_fields?.marker_icon,
      media: {
        featuredImageUrl: media?.media_details?.sizes?.large?.source_url,
      },
    };
  } catch {
    // @TODO do something if error
  }

  return undefined;
};

export async function getStaticPaths() {
  return { paths: [{ params: { campaignSlug: "el-comalote-gt" } }], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params!.campaignSlug;

  const content = await getPageContentByBusinessCampaignSlug(slug as string);

  return { props: { content } };
}

export default Index;
