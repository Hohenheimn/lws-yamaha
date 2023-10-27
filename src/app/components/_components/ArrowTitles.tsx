import ArrowTitle from "@/components/Shared/ArrowTitle";

const ArrowTitles = () => {
  const titles = ["Other News", "Color & Price", "Features", "Facebook"];

  return (
    <div className="flex flex-col gap-3">
      {titles.map((title) => (
        <ArrowTitle key={title} title={title} />
      ))}
    </div>
  );
};

export default ArrowTitles;
