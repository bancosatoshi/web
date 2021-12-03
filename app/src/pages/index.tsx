import { GetStaticPropsContext, NextPage } from "next";

import { HomeContainer } from "app/home/home/HomeContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "next-i18next";

const Index: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <HomeContainer />
    </AuthLayout>
  </AppLayout>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  await i18n?.reloadResources();

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "home", "head"])),
    },
  };
};

export default Index;
