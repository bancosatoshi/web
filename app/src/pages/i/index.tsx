import { NextPage } from "next";

import { AppLayout } from "layouts/app-layout/AppLayout";
import { AuthLayout } from "layouts/auth-layout/AuthLayout";
import { CampaignsGridContainer } from "app/campaigns-grid/CampaignsGridContainer";

const BusinessCampaigns: NextPage = () => (
  <AppLayout>
    <AuthLayout>
      <CampaignsGridContainer />
    </AuthLayout>
  </AppLayout>
);

export default BusinessCampaigns;
