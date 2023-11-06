"use client";

import Link from "next/link";
import { ReactNode, useMemo } from "react";
import ArrowTitles from "./_components/ArrowTitles";
import BreadcrumpsComponent from "./_components/BreadcrumpsComponent";
import EmbedSocialSection from "./_components/EmbedSocialSection";
import GridEmbedSocialSection from "./_components/GridEmbedSocialSection";
import NewsCardComponent from "./_components/NewsCardComponent";
import NewsCardListComponent from "./_components/NewsCardListComponent";
import ProductCardComponent from "./_components/ProductCardComponent";
import ProductFilterComponent from "./_components/ProductFilterComponent";
import ProductListsComponent from "./_components/ProductListsComponent";
import NewsGridSection from "@/components/sections/NewsGridSection";
import news from "@/data/news";
import BlogSection from "@/components/sections/BlogSection";
import blogs from "@/data/blogs";
import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import YamahaHistoryCardComponent from "./_components/YamahaHistoryCardComponent";
import OtherNewsSection from "./_components/OtherNewsSection";
import DetailTabsComponent from "./_components/DetailTabsComponent";
import MotorcycleFeaturesSection from "./_components/MotorcycleFeaturesSection";
import SpecificationSection from "./_components/SpecificationSection";

const componentTitles = [
  "Product Card",
  "Product Card List",
  "Product Filter",
  "Breadcrumps",
  "Embed Socials",
  "Grid Embed Socials",
  "News Card",
  "News Card List",
  "Arrow Titles",
  "News Grid Section",
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
            {args.title}{" "}
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
      {/* {renderSideMenu} */}
      <div className="flex flex-col gap-4 p-4 flex-1 h-screen overflow-y-auto scroll-smooth scroll-pt-4 scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
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
        {/* Embed Socials */}
        {renderComponent({
          title: "Embed Socials",
          component: <EmbedSocialSection />,
          note: "Embed social card height depends on its contents",
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3&mode=design&t=k72RwsE1mNhfW6Bi-1",
        })}
        {/* Grid Embed Socials */}
        {renderComponent({
          title: "Grid Embed Socials",
          component: <GridEmbedSocialSection />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A1848&mode=design&t=k72RwsE1mNhfW6Bi-1",
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
        {/* News Grid Section */}
        {renderComponent({
          title: "News Grid Section",
          component: (
            <NewsGridSection
              news={news.map((data) => ({
                ...data,
                onClick: () => console.log(data),
              }))}
            />
          ),
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=0%3A3&mode=design&t=LvTWo9pHIn3MiGhO-1",
        })}
        {/* Yamaha Lifestyle Studio Section */}
        {renderComponent({
          title: "Yamaha Lifestyle Studio Section",
          component: <YamahaLifeStyleStudioSection />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A3&mode=design&t=LvTWo9pHIn3MiGhO-1",
        })}
        {/* Blog Section */}
        {renderComponent({
          title: "Blog Section",
          component: <BlogSection blog={blogs[0]} />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A2630&mode=design&t=LvTWo9pHIn3MiGhO-1",
        })}
        {/* Yamaha History Card */}
        {renderComponent({
          title: "Yamaha History Card",
          component: <YamahaHistoryCardComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A1781&mode=design&t=LvTWo9pHIn3MiGhO-1",
        })}
        {/* Other News Section */}
        {renderComponent({
          title: "Other News Section",
          component: <OtherNewsSection />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A2281&mode=design&t=LvTWo9pHIn3MiGhO-1",
        })}
        {/* Motorcycle Detail Tabs */}
        {renderComponent({
          title: "Motorcycle Detail Tabs ",
          component: <DetailTabsComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A761&mode=design&t=LzzcopnZE6Ecsm8S-1",
        })}
        {/* Motorcycle Features Section */}
        {renderComponent({
          title: "Motorcycle Features Section ",
          component: <MotorcycleFeaturesSection />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A505&mode=design&t=LzzcopnZE6Ecsm8S-1",
        })}
        {/* Specification Section */}
        {renderComponent({
          title: "Specification Section",
          component: <SpecificationSection />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A505&mode=design&t=LzzcopnZE6Ecsm8S-1",
        })}
        {/* Use the "renderComponent" when you want to add more components, don't forget to add the same title to the "title" property, add note if there's needed to expound the component */}
      </div>
    </div>
  );
};

export default ComponentsPage;
