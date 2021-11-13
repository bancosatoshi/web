import { GetStaticPropsContext, NextPage } from "next";
import WPAPI from "wpapi";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";

const Index: NextPage<{ content: string }> = ({ content }) => (
  <AppLayout>
    <AuthLayout>
      <BusinessDetailsContainer content={content} />
    </AuthLayout>
  </AppLayout>
);

const getPageContentByBusinessSlug = async (slug: string) => {
  try {
    const wp = new WPAPI({ endpoint: "https://cms.bancosatoshi.com/wp-json" });

    const pages = await wp.pages().slug(slug);

    if (!pages.length) {
      // @TODO do something with an empty page content
    }

    return pages[0].content.rendered;
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

  return { props: { content: await getPageContentByBusinessSlug(slug as string) } };
}

export default Index;
