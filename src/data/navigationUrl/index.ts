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
    name: "Mio Sporty",
    url: "#",
  },
  {
    name: "Mio i125",
    url: "#",
  },
  {
    name: "Mio Soul i125",
    url: "#",
  },
  {
    name: "Mio Gear",
    url: "#",
  },

  {
    name: "Mio Fazio",
    url: "#",
  },
  {
    name: "Mio Gravis",
    url: "#",
  },
  {
    name: "Mio Aerox",
    url: "#",
  },
  {
    name: "NMAX",
    url: "#",
  },

  {
    name: "XMAX",
    url: "#",
  },
  {
    name: "MT-15",
    url: "#",
  },
];

export const navUrls: navUrlsType[] = [
  {
    title: "Motorcycle",
    url: "motorcycle",
    tabs: [
      {
        tab_title: "Personal Commuter",
        menus: sampleSubmenuUnit,
      },
      {
        tab_title: "Sports Machine",
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
    url: "parts-&-accessories",
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
