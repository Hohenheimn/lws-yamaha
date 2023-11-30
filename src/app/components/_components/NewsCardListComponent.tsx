import NewsCardList from "@/components/news/NewsCardList";
import newsCardData from "@/data/news/newsCard";

const NewsCardListComponent = () => {
  const news = Array(3)
    .fill("")
    .map((_, index) => ({
      ...newsCardData,
      id: index + 1,
      onClick: () => console.log(`News Card ${index + 1}`),
    }));

  return <NewsCardList news={[]} />;
};

export default NewsCardListComponent;
