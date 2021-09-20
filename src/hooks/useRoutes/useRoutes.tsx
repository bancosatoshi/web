type RouteMap = {
  realEstate: {
    solana: {
      properties: string;
      property: string;
      listProperty: string;
    };
  };
};

export const useRoutes: () => RouteMap = () => ({
  realEstate: {
    solana: {
      properties: "/real-estate/solana",
      property: "/real-estate/solana/property",
      listProperty: "/real-estate/solana/list-property",
    },
  },
});
