import { Link } from "react-router-dom";

const CabinCard = ({ cabin }) => {
  const {
    _id,
    image,
    title,
    location,
    price,
    description,
    rating,
    reviews,
  } = cabin;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <button className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center">
          ♡
        </button>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          {location}
        </p>

        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            {title}
          </h3>

          <p className="text-xl font-bold text-slate-900 whitespace-nowrap">
            £{price}
            <span className="text-sm font-normal text-gray-500"> pp</span>
          </p>
        </div>

        <p className="text-gray-600 text-sm leading-7 mb-6">
          {description}
        </p>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span className="text-green-600">
            {"★".repeat(Math.floor(rating || 0))}
          </span>
          <span>{reviews} reviews</span>
        </div>

        <Link
          to={`/cabins/${_id}`}
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CabinCard;