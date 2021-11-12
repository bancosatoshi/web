import { NextPage } from "next";

import { BusinessDetailsContainer } from "app/business/BusinessDetails/BusinessDetailsContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";

const Index: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <BusinessDetailsContainer />
    </AuthLayout>
  </AppLayout>
);

export async function getStaticPaths() {
  return { paths: [{ params: { businessId: "el-comalote-gt" } }], fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}

export default Index;
