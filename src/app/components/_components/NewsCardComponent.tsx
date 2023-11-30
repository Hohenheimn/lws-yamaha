import NewsCard from "@/components/news/NewsCard";
import newsCardData from "@/data/news/newsCard";

const NewsCardComponent = () => {
  return (
    <NewsCard
      url={""}
      {...newsCardData}
      onClick={() => console.log(newsCardData)}
    />
  );
};

export default NewsCardComponent;
