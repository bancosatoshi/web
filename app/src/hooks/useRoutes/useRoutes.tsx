type RouteMap = {
  realEstate: {
    solana: {
      properties: string;
      property: (tokenMetadataId: string) => string;
      listProperty: string;
    };
  };
  auth: {
    signIn: string;
  };
  api: {
    getCheckoutURL: string;
    auth: string;
    graphql: string;
  };
  invest: {
    grid: string;
    map: string;
  };
  campaign: (campaignSlug: string) => string;
  home: string;
};

export const routes: RouteMap = {
  realEstate: {
    solana: {
      properties: "/real-estate/solana",
      property: (tokenMetadataId: string) => `/real-estate/solana/property?tokenMetadataId=${tokenMetadataId}`,
      listProperty: "/real-estate/solana/list-property",
    },
  },
  auth: {
    signIn: "/a/ingresa", // @TODO resolve i18n paths for all languages
  },
  api: {
    getCheckoutURL: `/api/getCheckoutURL`,
    auth: `/api/auth`,
    graphql: `/api/graphql`,
  },
  invest: {
    grid: "/i",
    map: "/i/map", // @TODO resolve i18n paths for all languages
  },
  home: "/",
  campaign: (campaignSlug) => `/c/${campaignSlug}`,
};

export const useRoutes: () => RouteMap = () => routes;
