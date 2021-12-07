import React from "react";
import {  NextPage, GetStaticPropsContext } from "next";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { NotFound } from "app/not-found/NotFound";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NotFoundPage: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <NotFound />
    </AuthLayout>
  </AppLayout>
);

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  await i18n?.reloadResources();

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "i", "head", "nf"])),
    },
  };
};

export default NotFoundPage;