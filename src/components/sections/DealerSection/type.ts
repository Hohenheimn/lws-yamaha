export type DealerType = {
  id: 32;
  name: string;
  salesContactNumbers: string[];
  serviceContactNumbers: string[];
  emails: string[];
  completeAddress: string;
  facebookPageName: string;
  facebookPageUrl: string;
  facebookMessengerUrl: string;
  lazadaShopUrl: string;
  shopeeShopUrl: string;
  ytaLevel: string;
  longitude: string;
  latitude: string;
  country: string;
  region: string;
  province: string;
  municipality: string;
  barangay: string;
  street: string;
  houseNumber: string;
  dealerTypes: {
    id: number;
    name: string;
  }[];
  dealerFacilities: {
    id: number;
    name: string;
    url: string;
    image: string;
  }[];
};
