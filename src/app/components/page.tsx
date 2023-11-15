"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useQuery } from "react-query";

import BlogSection from "@/components/sections/BlogSection";
import DealerSection from "@/components/sections/DealerSection";
import FeaturedNewsSection from "@/components/sections/FeaturedNewsSection";
import NewsGridSection from "@/components/sections/NewsGridSection";
import PartsAndAccessoriesDetailsSection from "@/components/sections/PartsAndAccessoriesDetailsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoSection from "@/components/sections/VideoSection";
import WhyChooseUsSectoin from "@/components/sections/WhyChooseUsSection";

import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";

import SquareCard from "@/components/service/SquareCard";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import AnnouncementModal from "@/components/shared/modals/AnnouncementModal";
import blogs from "@/data/blogs";
import news from "@/data/news";
import { featuredNews, raceYourFlagNews } from "@/data/news/featuredNews";
import productData from "@/data/partsAndAccessories/product";
import services from "@/data/services/services";
import whyChooseUsFeatures from "@/data/whyChooseUs";

import AccessoriesSectionComponent from "./_components/AccessoriesSectionComponent";
import ArrowTitles from "./_components/ArrowTitles";
import BreadcrumpsComponent from "./_components/BreadcrumpsComponent";
import CcuMyRideLinkSectionComponent from "./_components/CcuMyRideLinkSectionComponent";
import CcuUpdatingProcedureSectionComponenet from "./_components/CcuUpdatingProcedureSectionComponenet";
import DetailTabsComponent from "./_components/DetailTabsComponent";
import EmbedSocialSection from "./_components/EmbedSocialSection";
import GridEmbedSocialSection from "./_components/GridEmbedSocialSection";
import HeroComponent from "./_components/hero/HeroComponent";
import HeroComponentFullScreen from "./_components/hero/HeroComponentFullScreen";
import LifeWithMotorcycleSectionComponent from "./_components/LifeWithMotorcycleSectionComponent";
import MotorcycleCardComponent from "./_components/motorcycle/MotorcycleCardComponent";
import MotorcycleCardListComponent from "./_components/motorcycle/MotorcycleCardListComponent";
import MotorcycleCarouselComponent from "./_components/motorcycle/MotorcycleCarouselComponent";
import MotorcycleColorAndPriceSectionComponent from "./_components/MotorcycleColorAndPriceSectionComponent";
import MotorcycleFeaturesSection from "./_components/MotorcycleFeaturesSection";
import NewsCardComponent from "./_components/NewsCardComponent";
import NewsCardListComponent from "./_components/NewsCardListComponent";
import OtherNewsSection from "./_components/OtherNewsSection";
import PolicyAndGuidedbookSectionComponent from "./_components/PolicyAndGuidedbookSectionComponent";
import ProductCardComponent from "./_components/ProductCardComponent";
import ProductFilterComponent from "./_components/ProductFilterComponent";
import ProductListsComponent from "./_components/ProductListsComponent";
import ServiceDetailSectionComponent from "./_components/ServiceDetailSectionComponent";
import SpecificationSection from "./_components/SpecificationSection";
import YamahaHistoryCardComponent from "./_components/YamahaHistoryCardComponent";
import YamahalubeCharacteristicSectionComponent from "./_components/YamahalubeCharacteristicSectionComponent";
import YamahaTechnicalAcademySectionComponent from "./_components/YamahaTechnicalAcademySectionComponent";
import YConnectSectionComponent from "./_components/YConnectSectionComponent";
import YdtSectionComponent from "./_components/YdtSectionComponent";

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

  return (
    <div className="flex">
      <AnnouncementModal desktopImage="/assets/images/samples/sample-screen-banner.png" />
      <div className="flex flex-col gap-4 p-4 flex-1 h-screen overflow-y-auto scroll-smooth scroll-pt-4 scrollbar-thin scrollbar-thumb-[#545454] hover:scrollbar-thumb-[#7a7a7a] scrollbar-thumb-rounded-full">
        {/* Parts and Accessories Details Section */}
        {renderComponent({
          title: "Featured News Section",
          component: (
            <PartsAndAccessoriesDetailsSection product={productData} />
          ),
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=1129%3A3379&mode=design&t=cyNBKBl85Ry8eZd0-1",
        })}
        {/* Featured News Section */}
        {renderComponent({
          title: "Featured News Section",
          component: (
            <FeaturedNewsSection
              title="The World of Yamaha"
              subTitle="Stay updated with the latest news"
              news={featuredNews}
            />
          ),
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=1129%3A2080&mode=design&t=cyNBKBl85Ry8eZd0-1",
        })}
        {/* Race Your Flag Section */}
        {renderComponent({
          title: "Race Your Flag Section",
          component: (
            <FeaturedNewsSection
              title="Race Your Flag"
              subTitle="Feeling lap. Riding beyond bounderies."
              news={raceYourFlagNews}
            />
          ),
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=1129%3A2316&mode=design&t=cyNBKBl85Ry8eZd0-1",
        })}
        {/* Header */}
        {renderComponent({
          title: "Header",

          component: <Header />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}

        {/* Hero Homepage */}
        {renderComponent({
          title: "Hero Homepage",

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
        <div className=" p-5 border rounded-lg text-white space-y-5">
          <h3>Motorcycle Model Section</h3>
          <MotorcycleCarouselComponent />
        </div>

        {renderComponent({
          title: "Motorcycle Color And Price Section",
          component: <MotorcycleColorAndPriceSectionComponent />,

          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-505&mode=design&t=h209WHt5nneJ1fa7-0",
        })}
        {/* Motorcycle Carousel */}
        {renderComponent({
          title: "Life With Motorcycle Section",
          component: <LifeWithMotorcycleSectionComponent />,

          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-505&mode=design&t=h209WHt5nneJ1fa7-0",
        })}
        {/* Motorcycle Carousel */}
        {renderComponent({
          title: "Accessories Section",
          component: <AccessoriesSectionComponent />,

          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3&mode=design&t=Kd8GAXZ5PgsrYdPD-0",
        })}
        {/* Motorcycle Carousel */}
        {renderComponent({
          title: "Ccu MyRide Link Section",
          component: <CcuMyRideLinkSectionComponent />,

          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3315&mode=design&t=h209WHt5nneJ1fa7-0",
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

        {/* Footer */}
        <div className=" px-2 lg:p-5 border rounded-lg text-white space-y-5">
          <h3>Footer</h3>
          <Footer />
        </div>

        {/* News Grid Section */}
        {renderComponent({
          title: "News Grid Section",
          component: (
            <NewsGridSection
              news={news.map((data) => ({
                ...data,
                onClick: () => console.log(data),
              }))}
              onViewAll={() => {}}
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
        {/* Service Square Card */}
        {renderComponent({
          title: "Service Square Card",
          component: <SquareCard {...whyChooseUsFeatures[0]} />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A4803&mode=design&t=fCNMskUhjGLQZCxi-1",
        })}
        {/* Why Choose Us Section */}
        {renderComponent({
          title: "Why Choose Us Section",
          component: <WhyChooseUsSectoin features={whyChooseUsFeatures} />,
          note: 'This data is static as the "Why choose us?" section might not be change over time',
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A4803&mode=design&t=fCNMskUhjGLQZCxi-1",
        })}
        {/* Our Services Section */}
        {renderComponent({
          title: "Our Services Section",
          component: <ServicesSection data={services} />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A4803&mode=design&t=fCNMskUhjGLQZCxi-1",
        })}
        {/* Serbilis Video Section */}
        {renderComponent({
          title: "Serbilis Video Section",
          component: (
            <VideoSection
              title="Experience YAMAHA’s High – End Technology"
              videoUrls={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          ),
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508%3A4803&mode=design&t=fCNMskUhjGLQZCxi-1",
        })}
        {/* Y-Connect Section */}
        <div className=" px-2 lg:p-5 border rounded-lg text-white space-y-5">
          <h3>Y-Connect Section</h3>
          <YConnectSectionComponent />
        </div>
        {/* CCU Updating Procedure Section */}
        {renderComponent({
          title: "CCU Updating Procedure Section",
          component: <CcuUpdatingProcedureSectionComponenet />,
          note: "It looks messy if the numbers are not aligned ",
          wireframeLink:
            "https://www.figma.com/proto/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3315&t=dDeaNup35WSL2pcH-0&scaling=min-zoom&page-id=507%3A2&starting-point-node-id=508%3A252",
        })}
        {/* Policy And Guidedbook Section */}
        {renderComponent({
          title: "Policy And Guidedbook Section",
          component: <PolicyAndGuidedbookSectionComponent />,

          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-2045&mode=design",
        })}
        {/* Service Detail Section */}
        {renderComponent({
          title: "Service Detail Section",
          component: <ServiceDetailSectionComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3387&mode=design ",
        })}
        {/* Yamahalube Characteristic Section */}
        {renderComponent({
          title: "Yamahalube Characteristic Section ",
          component: <YamahalubeCharacteristicSectionComponent />,
          wireframeLink:
            "https://www.figma.com/file/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-3387&mode=design ",
        })}
        {/* Yamaha Technical Academy Section */}
        {renderComponent({
          title: "Yamaha Technical Academy Section ",
          component: <YamahaTechnicalAcademySectionComponent />,
          wireframeLink:
            "https://www.figma.com/proto/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-2131&scaling=min-zoom&page-id=507%3A2&starting-point-node-id=508%3A252",
        })}
        {/* YDT Section */}
        {renderComponent({
          title: "YDT Section ",
          component: <YdtSectionComponent />,
          wireframeLink:
            "https://www.figma.com/proto/vnsSmPekSbpyocHalLTpDr/Yamaha-Revamp-v2?type=design&node-id=508-2131&scaling=min-zoom&page-id=507%3A2&starting-point-node-id=508%3A252",
        })}
        {/* Dealers */}
        {/* Y-Connect Section */}
        <div className=" px-2 lg:p-5 border rounded-lg text-white space-y-5">
          <h3>Dealers</h3>
          <DealerSection />
        </div>

        {/* Use the "renderComponent" when you want to add more components, don't forget to add the same title to the "title" property, add note if there's needed to expound the component */}
      </div>
    </div>
  );
};

export default ComponentsPage;
