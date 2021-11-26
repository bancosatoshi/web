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
  invest: {
    grid: string;
    map: string;
    data: string;
  };
  campaign: (campaignSlug: string) => string;
  home: string;
};

export const useRoutes: () => RouteMap = () => ({
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
  invest: {
    grid: "/i",
    map: "/i/map",
    data: "/i/data", // @TODO resolve i18n paths for all languages
  },
  home: "/",
  campaign: (campaignSlug) => `/c/${campaignSlug}`,
});
