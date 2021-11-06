import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { PropertyContainer } from "../../../app/real-estate/solana/property/PropertyContainer";
import { SolanaWalletContextControllerProps } from "../../../context/solana/SolanaWalletContext.types";
import { AppLayout } from "../../../layouts/app-layout/AppLayout";
import { DashboardLayout } from "../../../layouts/dashboard-layout/DashboardLayout";

// We need to import this component dynamically because some of its dependencies rely on the window object, plus it uses the "export" keyword which is not supported by NextJS in node_modules
const WalletSolanaContextController = dynamic<SolanaWalletContextControllerProps>(
  () =>
    import("../../../context/solana/SolanaWalletContextController").then((mod) => mod.SolanaWalletContextController),
  {
    ssr: false,
  },
);

const Property: NextPage = () => (
  <AppLayout>
    <WalletSolanaContextController>
      <DashboardLayout>
        <PropertyContainer />
      </DashboardLayout>
    </WalletSolanaContextController>
  </AppLayout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common", "property"])),
  },
});

export default Property;
