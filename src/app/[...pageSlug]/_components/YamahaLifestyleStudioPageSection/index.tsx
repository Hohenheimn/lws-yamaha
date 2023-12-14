import YamahaLifeStyleStudioSection from "@/components/sections/YamahaLifeStyleStudioSection";
import { useRouter } from "next/navigation";

type PropsType = Partial<{
  title: string;
  description: string;
  url: string;
  urlLabel: string;
  contents: Array<{
    name: string;
    embedSocialId: string;
  }>;
}>;

const YamahaLifestyleStudioPageSection = (props: PropsType) => {
  const router = useRouter();
  return (
    <YamahaLifeStyleStudioSection
      title={props?.title}
      subTitle={props.description}
      button={{
        onClick: () => router.push(`${props.url}`),
        text: `${props?.urlLabel}`,
      }}
      embedSocials={props.contents?.map((content) => ({
        embedSocialId: content.embedSocialId,
        title: content.name,
      }))}
    />
  );
};

export default YamahaLifestyleStudioPageSection;
