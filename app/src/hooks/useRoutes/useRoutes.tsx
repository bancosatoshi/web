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
    map: string;
  };
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
    map: "/i/map", // @TODO resolve i18n paths for all languages
  },
  home: "/",
});
