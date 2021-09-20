import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Properties } from "../app/real-estate/solana/properties/Properties";
import { AppLayout } from "../layouts/app-layout/AppLayout";

const Index = () => (
  <AppLayout>
    <Properties />
  </AppLayout>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Index;
