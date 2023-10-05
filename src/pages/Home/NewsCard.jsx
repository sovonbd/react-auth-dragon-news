import { Link } from "react-router-dom";

const NewsCard = ({ newsItem }) => {
  const { title, image_url, details, _id } = newsItem;
  return (
    <div>
      <div className="card bg-base-100 border mb-16 p-4 rounded-md space-y-4">
        <div className="card-body p-0">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure className="rounded-none">
          <img className="" src={image_url} alt="Shoes" />
        </figure>
        <div className="text-justify">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200).trim() + "..."}{" "}
              <Link className="text-[#F75B5F] font-semibold" to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
