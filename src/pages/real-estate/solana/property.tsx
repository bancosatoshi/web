import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PropertyContainer } from "../../../app/real-estate/solana/property/PropertyContainer";
import { WalletSelectorContextController } from "../../../context/wallet-selector/WalletSelectorContextController";
import { AppLayout } from "../../../layouts/app-layout/AppLayout";
import { DashboardLayout } from "../../../layouts/dashboard-layout/DashboardLayout";

const Property: NextPage = () => (
  <AppLayout>
    <WalletSelectorContextController>
      <DashboardLayout>
        <PropertyContainer />
      </DashboardLayout>
    </WalletSelectorContextController>
  </AppLayout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common", "property"])),
  },
});

export default Property;
