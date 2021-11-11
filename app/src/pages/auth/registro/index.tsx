import { NextPage } from "next";

import { SignUpContainer } from "app/auth/sign-up/SignUpContainer";
import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";

const Index: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <SignUpContainer />
    </AuthLayout>
  </AppLayout>
);

export default Index;
