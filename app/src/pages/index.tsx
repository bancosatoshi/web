import { NextPage } from "next";
import { Container } from "react-grid-system";

import { HomeContainer } from "../app/home/home/HomeContainer";
import { AppLayout } from "../layouts/app-layout/AppLayout";
import { AuthLayout } from "../layouts/auth-layout/AuthLayout";

const Index: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <HomeContainer />
    </AuthLayout>
  </AppLayout>
);

export default Index;
