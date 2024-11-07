import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card({ gadget }) {
  return (
    <div className="p-4 rounded-2xl bg-white">
      <div className="h-48">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={gadget.product_image}
          alt="Dell XPS 13"
        />
      </div>
      <h4 className="mt-5 text-xl mb-1 font-semibold">
        {gadget.product_title}
      </h4>
      <p className="text-gray-600 font-medium text-base">
        Price: {gadget.price}k
      </p>
      <Link to={`/${gadget.product_id}`}>
        <button className="mt-3 px-4 py-2 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white hover:ease-linear">
          View Details
        </button>
      </Link>
    </div>
  );
}

Card.propTypes = {
  gadget: PropTypes.object,
};
