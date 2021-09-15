import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Home } from "../../../app/home/Home";
import { AppLayout } from "../../../layouts/app-layout/AppLayout";

const SolanaRealEstate: NextPage = () => (
  <AppLayout>
    <Home />
  </AppLayout>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default SolanaRealEstate;
