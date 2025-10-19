import { Link, useLoaderData, useParams } from "react-router";
import Container from "../components/Container";
import HeaderLogo from "../components/HeaderLogo";
import RightAside from "../components/homelayout/RightAside";

export default function NewsDetailsPage() {
  const news = useLoaderData();
  const { id } = useParams();
  const filterNews = news.find((singleNews) => singleNews.id === id);
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <header>
        <HeaderLogo />
      </header>
      <Main>
        <NewsDetails news={filterNews} />
        <RightAside />
      </Main>
    </div>
  );
}

function Main({ children }) {
  return (
    <main>
      <Container styles="grid grid-cols-12 items-start gap-4">
        {children}
      </Container>
    </main>
  );
}

// {
//     "id": "23456789abcdef0123456789",
//     "category_id": 2,
//     "title": "Central Bank Announces New Monetary Policy to Control Inflation",
//     "rating": {
//         "number": 3,
//         "badge": "trending"
//     },
//     "total_view": 4567,
//     "author": {
//         "name": "Aminul Islam",
//         "published_date": "2025-04-22T16:45:00.000Z",
//         "img": "https://randomuser.me/api/portraits/men/55.jpg"
//     },
//     "thumbnail_url": "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/12/06/taka_mumitm-1977_0.jpg",
//     "image_url": "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/12/06/taka_mumitm-1977_0.jpg",
//     "details": "The central bank of Bangladesh has unveiled its latest monetary policy statement, outlining measures intended to curb the recent rise in inflation. The new policy includes adjustments to key interest rates and reserve requirements for commercial banks. The central bank aims to stabilize prices and manage inflationary pressures effectively through these interventions. Economists are closely analyzing the potential impact of these measures on various sectors of the economy and on the overall cost of living. The effectiveness of the new monetary policy in achieving its objectives will be closely monitored in the coming months, as the nation grapples with the challenges of rising inflation.",
//     "tags": [
//         "central bank",
//         "monetary policy",
//         "inflation",
//         "economy",
//         "finance"
//     ],
//     "others": {
//         "is_today_pick": false,
//         "is_trending": false
//     },
//     "production": true
// }

function NewsDetails({ news }) {
  const { image_url, title, details, category_id } = news;
  return (
    <section className="col-span-9">
      <p className="mb-5 font-bold">Dragon News</p>
      <article className="border-base-300 space-y-4 rounded-sm border p-4">
        <img
          className="h-[21.875rem] w-full rounded-sm object-cover"
          src={image_url}
          alt={title}
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{details}</p>
        <Link className="btn btn-secondary" to={`/category/${category_id}`}>
          &larr; All news in this category{" "}
        </Link>
      </article>
    </section>
  );
}
