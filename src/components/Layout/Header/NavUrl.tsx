export type navTabType = {
  tab_title: string;
  menus: navMenusType[];
};

export type navMenusType = {
  name: string;
  url: string;
};

export type navUrlsType = {
  title: string | React.ReactNode;
  url?: string;
  tabs?: navTabType[];
  menus?: navMenusType[];
};

const sampleSubmenuUnit = [
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },

  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },

  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
];

export const navUrls: navUrlsType[] = [
  {
    title: "Motorcycle",
    tabs: [
      {
        tab_title: "Personal Commuter",
        menus: sampleSubmenuUnit,
      },
      {
        tab_title: "Big Bike",
        menus: sampleSubmenuUnit,
      },
      {
        tab_title: "App",
        menus: sampleSubmenuUnit,
      },
    ],
  },
  {
    title: "Parts & Accessories",
    menus: sampleSubmenuUnit,
  },
  {
    title: "Service",
    url: "/service",
  },
  {
    title: "Find Dealer",
    url: "/find-dealer",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "Yamaha Lifestyle Studio",
    url: "/yamaha-lifestyle-studio",
  },
  {
    title: "Yamaha's History",
    url: "/yamahas-history",
  },
];
