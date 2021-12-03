import { GetStaticPropsContext, NextPage } from "next";

import { SignUpContainer } from "app/auth/sign-up/SignUpContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <SignUpContainer />
    </AuthLayout>
  </AppLayout>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  await i18n?.reloadResources();

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "a", "head"])),
    },
  };
};

export default Index;
