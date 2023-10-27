"use client";

import { ReactNode, useMemo } from "react";
import Link from "next/link";

import ArrowTitles from "./_components/ArrowTitles";
import BreadcrumpsComponent from "./_components/BreadcrumpsComponent";
import EmbedSocialSection from "./_components/EmbedSocialSection";
import GridEmbedSocialSection from "./_components/GridEmbedSocialSection";
import HeroComponent from "./_components/hero/HeroComponent";
import HeroComponentFullScreen from "./_components/hero/HeroComponentFullScreen";
import MotorcycleCardComponent from "./_components/motorcycle/MotorcycleCardComponent";
import MotorcycleCardListComponent from "./_components/motorcycle/MotorcycleCardListComponent";
import MotorcycleCarouselComponent from "./_components/motorcycle/MotorcycleCarouselComponent";
import NewsCardComponent from "./_components/NewsCardComponent";
import NewsCardListComponent from "./_components/NewsCardListComponent";
import ProductCardComponent from "./_components/ProductCardComponent";
import ProductFilterComponent from "./_components/ProductFilterComponent";
import ProductListsComponent from "./_components/ProductListsComponent";

const componentTitles = [
  "Hero Homepage",
  "Hero Inside Pages",
  "Motorcycle Model Card",
  "Motorcycle Model Card List",
  "Motorcycle Model Carousel",
  "Product Card",
  "Product Card List",
  "Product Filter",
  "Breadcrumps",
  "Embed Socials",
  "Grid Embed Socials",
  "News Card",
  "News Card List",
  "Arrow Titles",
];

const ComponentsPage = () => {
  const renderComponent = (args: {
    title: string;
    note?: string;
    component: ReactNode;
    wireframeLink: string;
  }) => {
    return (
      <fieldset
        id={args.title}
        className="flex flex-col gap-4 border border-solid-[#f1f1f1] p-4 rounded-lg"
      >
        <legend className="text-[#f1f1f1] font-bold px-4">
          <Link href={args.wireframeLink} target="_blank">
            {args.title}
          </Link>
        </legend>
        <div className="px-4">
          {args.note && (
            <p className="text-[#ff6060] italic font-semibold">{args.note}</p>
          )}
        </div>
        {args.component}
      </fieldset>
    );
  };

  const renderSideMenu = useMemo(() => {
    return (
      <aside className="bg-[#373737] py-5 px-7 hidden md:flex flex-col gap-2 rounded-lg m-4 mr-0">
        {componentTitles.map((title) => (
          <Link
            key={title}
            href={`/components#${title}`}
            className="text-[#f1f1f1] font-semibold"
          >
            {title}
          </Link>
        ))}
      </aside>
    );
  }, []);

  return (
    <div className="flex">
      {renderSideMenu}
      <div className="flex flex-col gap-4 p-4 flex-1 h-screen overflow-y-auto scroll-smooth scroll-pt-4 scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        {/* Hero Homepage */}
        {renderComponent({
          title: "Hero Homepage",
          note: "It's full screen but because there is spacing on this page for the presentation, it doesn't seem like it is",
          component: <HeroComponentFullScreen />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Hero Full Screen */}
        {renderComponent({
          title: "Hero Inside Pages",
          component: <HeroComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-1231&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Motorcycle Card */}
        {renderComponent({
          title: "Motorcycle Model Card",
          component: <MotorcycleCardComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-1231&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Motorcycle Card List */}
        {renderComponent({
          title: "Motorcycle Model Card List",
          component: <MotorcycleCardListComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-1231&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Motorcycle Carousel */}
        {renderComponent({
          title: "Motorcycle Model Section",
          component: <MotorcycleCarouselComponent />,
          note: "Cards width depends on number of carousel slides show per view, it may look thin since it suppose to be full width of screen",
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Product Card */}
        {renderComponent({
          title: "Product Card",
          component: <ProductCardComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3477&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Product Card List */}
        {renderComponent({
          title: "Product Card List",
          component: <ProductListsComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3628&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Product Filter */}
        {renderComponent({
          title: "Product Filter",
          component: <ProductFilterComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3477&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Product Filter */}
        {renderComponent({
          title: "Breadcrumps",
          component: <BreadcrumpsComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3545&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Embed Social */}
        {renderComponent({
          title: "Embed Socials",
          component: <EmbedSocialSection />,
          note: "Embed social card height depends on its contents",
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* News Card */}
        {renderComponent({
          title: "News Card",
          component: <NewsCardComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3046&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}

        {/* News Card */}
        {renderComponent({
          title: "News Card List",
          component: <NewsCardListComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3046&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Arrow Title */}
        {renderComponent({
          title: "Arrow Titles",
          component: <ArrowTitles />,
          note: "Adjusted the font size and arrow size as it is too big",
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A505&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Use the "renderComponent" when you want to add more components, don't forget to add the same title to the "title" property, add note if there's needed to expound the component */}
      </div>
    </div>
  );
};

export default ComponentsPage;
