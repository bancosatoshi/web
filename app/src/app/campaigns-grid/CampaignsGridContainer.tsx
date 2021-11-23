import { useGetActiveBusinessCampaignsQuery } from "api/codegen";
import { useToastContext } from "hooks/useToastContext/useToastContext";
import { Typography } from "ui/typography/Typography";
import { CampaignsGrid } from "./CampaignsGrid";

export const CampaignsGridContainer = () => {
  const {
    data: getBusinessCampaignsQueryData,
    error: getBusinessCampaignsQueryError,
    loading: isGetBusinessByCampaignsQueryLoading,
  } = useGetActiveBusinessCampaignsQuery();

  const toaster = useToastContext();

  if (!getBusinessCampaignsQueryData) {
    //Alternatively return or redirect to a not found page

    toaster.trigger({
      variant: "info",
      title: "No pudimos encontrar lo que buscabas",
      withTimeout: false,
      children: <Typography.Text>No hemos encontrado información de campañas activas</Typography.Text>,
    });

    return null;
  }

  if (!getBusinessCampaignsQueryError) {
    toaster.trigger({
      variant: "error",
      title: "Algo Ha Salido Mal",
      withTimeout: false,
      actionText: "cerrar",
      children: <Typography.Text>Ha habido un error mientras intentabamos obtener la información.</Typography.Text>,
    });

    return null;
  }

  if (isGetBusinessByCampaignsQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  const campaigns = getBusinessCampaignsQueryData.getActiveBusinessCampaigns;

  return <CampaignsGrid campaigns={campaigns} />;
};
