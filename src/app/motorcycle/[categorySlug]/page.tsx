import React from "react";
import AccessoriesSection from "@/components/sections/AccessoriesSection";
import Hero from "@/components/sections/Hero";
import LifeWithMotorcycleSection from "@/components/sections/LifeWithMotorcyleSection";
import MotorcycleColorAndPriceSection from "@/components/sections/MotorcycleColorAndPriceSection";
import MotorcycleFeaturesSection from "@/components/sections/MotorcycleFeaturesSection";
import SpecificationSection from "@/components/sections/SpecificationSection";
import InquieryAndFindDealerButtons from "@/components/sections/InquieryAndFindDealerButtons";
import nextApi from "@/utils/nextApi";
import config from "@/utils/config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const VehicleListSection = dynamic(
  () => import("./_components/VehicleListSection")
);

type PropsType = {
  params: {
    categorySlug: string;
  };
  searchParms: {};
};

export const generateMetaData = async (categorySlug: string) => {
  try {
    const res = await nextApi.get(`/api/categories/${categorySlug}`);
    const data = await res.data.data;

    return {
      ...data,
      title: data?.metaTitle,
      openGraph: {
        title: data?.metaTitle,
        description: data?.metaDescription,
        images: [`${config.imageBaseUrl}${data?.metaImage}`],
      },
    };
  } catch (error) {
    return redirect("404");
  }
};

const MotorcycleCategoryPage = async ({ params }: PropsType) => {
  const category = await generateMetaData(params.categorySlug);

  return (
    <div>
      <Hero
        desktopBgImage={`${config.imageBaseUrl}${category?.image.slice(1)}`}
        title={`${category?.title}`}
        description={`${category?.description}`}
        textPosition={"bottom-left"}
      />
      {!!category?.id && (
        <VehicleListSection vehicleCategoryId={category?.id} />
      )}
      <InquieryAndFindDealerButtons />
    </div>
  );
};

// const MotorcycleCategoryPage = (props: PropsType) => {
//   const features: any = [...Array(6)].map((_, index) => ({
//     id: index + 1,
//     title: "Refined 155CC Blue Core Engine",
//     description:
//       "A liquid-cooled, 4-stroke SOHC, 155cc, single-cylinder, 4-valve, fuel-injected engine with CVT is adopted. By the continuous development of technology, the upgraded engine makes use of a new cylinder head and a compact combustion chamber to achieve a higher compression ratio.",
//     image: "/assets/images/samples/sample-service-2.png",
//   }));
//   const categories = [
//     "Engine",
//     "Chasis",
//     "Dimension",
//     "Electrical",
//     "Standard Equipment",
//   ];
//   const specifications = categories.map((category, index) => ({
//     id: index + 1,
//     category,
//     specifications: [...Array(6)].map((_, index) => ({
//       id: index + 1,
//       name: `${category} Spec Name ${index + 1}`,
//       value: `${category} Spec Value ${index + 1}`,
//     })),
//   }));
//   return (
//     <div>
//       <Hero
//         desktopBgImage={"/assets/images/samples/sample-dealer-hero.png"}
//         title={props.params.categorySlug.replaceAll("-", " ")}
//         description={
//           "Lorem ipsum dolor sit amet consectetur. Malesuada non mauris pellentesque augue fermentum tristique nulla et. In vitae donec fringilla elit hendrerit aliquet"
//         }
//         textPosition={"bottom-left"}
//         fullHeight={false}
//       />
//       <MotorcycleColorAndPriceSection
//         motorcycle_detail={[
//           {
//             color: "#1e1e1e",
//             motorcycleImage: "/assets/images/samples/sample-unit -2.png",
//             motorcycleName: "Race Black",
//             titleImage: "/assets/images/samples/sample-title.png",
//             desktopBgImage: "/assets/images/samples/sample-color-price.png",

//             description:
//               "Lorem ipsum dolor sit  facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
//             price: 155800,
//           },
//           {
//             color: "#01b1e9",
//             motorcycleImage: "/assets/images/placeholder.png",
//             motorcycleName: "Race Blue",
//             titleImage: "/assets/images/samples/sample-title.png",
//             desktopBgImage: "/assets/images/samples/sample-color-price.png",
//             mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
//             description:
//               "Lorem ipsum dolor sit  repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
//             price: 1000000,
//           },
//           {
//             color: "#a0afcc",
//             motorcycleImage: "/assets/images/placeholder.png",
//             motorcycleName: "Race Gray",
//             titleImage: "/assets/images/samples/sample-title.png",
//             desktopBgImage: "/assets/images/samples/sample-color-price.png",
//             mobileBgImage: "/assets/images/samples/sample-screen-banner.png",
//             description:
//               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem.",
//             price: 95000,
//           },
//         ]}
//       />
//       <LifeWithMotorcycleSection
//         imageTitle={"/assets/images/samples/sample-be-one-with-speed.png"}
//         desktopBgImage={"/assets/images/samples/sample-speed.png"}
//         mobileBgImage={"/assets/images/samples/sample-speed.png"}
//         description={
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima repellat id nihil nisi officia sequi delectus natus, facere exercitationem voluptatibus culpa porro necessitatibus, tempora velit a ratione dolores quidem."
//         }
//       />
//       <section className=" space-y-16">
//         <MotorcycleFeaturesSection features={features} />

//         <SpecificationSection
//           specifications={specifications}
//           onClickBrochure={() => console.log("Download Brochure")}
//         />
//         <AccessoriesSection
//           accessories={[
//             {
//               accessoryImage: "/assets/images/samples/sample-accessory.png",
//               title: "Crank Case Cover Carbon",
//               url: "#",
//             },
//             {
//               accessoryImage: "/assets/images/samples/sample-accessory.png",
//               title: "Crank Case Cover Carbon",
//               url: "#",
//             },
//             {
//               accessoryImage: "/assets/images/samples/sample-accessory.png",
//               title: "Crank Case Cover Carbon",
//               url: "#",
//             },
//             {
//               accessoryImage: "/assets/images/samples/sample-accessory.png",
//               title: "Crank Case Cover Carbon",
//               url: "#",
//             },
//           ]}
//         />
//       </section>

//       <InquieryAndFindDealerButtons />
//     </div>
//   );
// };

export default MotorcycleCategoryPage;