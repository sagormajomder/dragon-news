import { use } from "react";
import Marquee from "react-fast-marquee";

const newsPromise = fetch("../news.json").then((res) => res.json());

export default function LatestNews() {
  const news = use(newsPromise);
  const breakingNews = news.filter(
    (singleNews) => singleNews.others.is_today_pick,
  );

  return (
    <div className="bg-base-200 mb-5 flex items-center gap-5">
      <p className="text-base-100 bg-secondary px-4 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        {breakingNews.map((news) => (
          <p key={news.id} className="mr-5 font-medium">
            &rarr; {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
}
