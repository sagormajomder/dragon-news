import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link, useLoaderData, useNavigation, useParams } from "react-router";

export default function CategoryNewsPage() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <span className="loading loading-spinner loading-xl text-info col-span-6 justify-self-center"></span>
    );
  }

  const { id } = useParams();
  const data = useLoaderData();

  let filteredNews = data;
  if (+id === 0) {
    filteredNews = data;
  } else if (+id === 1) {
    filteredNews = data.filter((news) => news.others.is_today_pick);
  } else {
    filteredNews = data.filter((news) => news.category_id === +id);
  }

  return (
    <section className="col-span-6">
      <h2 className="mb-3">
        Total <span className="text-secondary">{filteredNews.length}</span> news
        found
      </h2>
      <div className="space-y-3.5">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}

function NewsCard({ news }) {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <article className="card bg-base-100 mb-6 shadow-md">
      {/* Author + Share */}
      <div className="bg-base-200 flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="hover:text-primary flex gap-1 text-gray-500">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>
      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-primary cursor-pointer text-lg font-bold">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="h-48 w-full rounded-md object-cover"
        />
      </div>

      {/* Details */}
      <div className="text-accent px-4">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary cursor-pointer font-semibold hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="border-base-200 mt-3 flex items-center justify-between border-t px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </article>
  );
}
