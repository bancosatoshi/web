type RouteMap = {
  realEstate: {
    solana: {
      properties: string;
      property: (tokenMetadataId: string) => string;
      listProperty: string;
    };
  };
};

export const useRoutes: () => RouteMap = () => ({
  realEstate: {
    solana: {
      properties: "/real-estate/solana",
      property: (tokenMetadataId: string) => `/real-estate/solana/property?tokenMetadataId=${tokenMetadataId}`,
      listProperty: "/real-estate/solana/list-property",
    },
  },
});
