import { GetStaticPropsContext, NextPage } from "next";
import WPAPI from "wpapi";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { BusinessDetailsProps } from "app/business/BusinessDetails/BusinessDetails.types";

const Index: NextPage<BusinessDetailsProps> = ({ content, media }) => (
  <AppLayout>
    <AuthLayout>
      <BusinessDetailsContainer content={content} media={media} />
    </AuthLayout>
  </AppLayout>
);

const getPageContentByBusinessSlug = async (slug: string) => {
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
  return { paths: [{ params: { businessId: "el-comalote-gt" } }], fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params!.businessId;

  const content = await getPageContentByBusinessSlug(slug as string);

  return { props: { content: content?.asHtmlString, media: content?.media } };
}

export default Index;
