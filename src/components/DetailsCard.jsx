import { Rating } from "@mui/material";
import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { addLocalItem } from "../utils/localstorage";
import toast from "react-hot-toast";
import { useState } from "react";

function DetailsCard({ gadget }) {
  const [disableFavorite, setDisableFavorite] = useState(false);
  const [disableCart, setDisableCart] = useState(false);

  function handleCart(gadget) {
    addLocalItem("cart", gadget);
    setDisableCart(true);
    toast.success("Successfully Added on Your Cart!");
  }

  function handleFavorite(favoriteItem) {
    addLocalItem("favorite", favoriteItem);

    setDisableFavorite(true);
    toast.success("Successfully Added on Your Wishlist!");
  }
  return (
    <div className="-mb-48 absolute p-6 rounded-3xl bg-white max-w-screen-xl mx-28">
      <div className="flex gap-6">
        <div className="w-1/2">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={gadget?.product_image}
            alt="download"
          />
        </div>
        <div>
          <h4 className="font-semibold text-xl">{gadget?.product_title}</h4>
          <p className="mt-1 font-semibold text-base text-gray-800 mb-2">
            Price: ${gadget?.price}
          </p>
          {gadget?.availability ? (
            <span className="text-lime-700 border border-lime-700 bg-lime-50 rounded-full px-3 py-1 font-medium inline-block">
              In Stock
            </span>
          ) : (
            <span className="text-red-700 border border-red-700 bg-red-50 rounded-full px-3 py-1 font-medium inline-block">
              Out Of Stock
            </span>
          )}

          <p className="text-gray-600 my-3">{gadget?.description}</p>
          <ol className="list-decimal list-inside">
            <h4 className="font-bold mb-2">Specification:</h4>
            {gadget?.specification.map((facility, idx) => (
              <li key={idx}>
                <a className="text-gray-600" href="#">
                  {facility}
                </a>
              </li>
            ))}
          </ol>

          <span className="font-bold mt-2 inline-block">Rating ⭐ </span>
          <div className="flex gap-2 mt-2">
            <Rating
              name="read-only"
              value={parseInt(gadget?.rating) ?? ""}
              readOnly
            />

            <button className="rounded-full bg-gray-100 px-3 py-1">
              {gadget?.rating}
            </button>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <button
              disabled={disableCart}
              onClick={() => handleCart(gadget)}
              className="bg-purple-600 flex items-center rounded-full font-bold text-white hover:text-purple-600 hover:bg-white border border-purple-600 gap-2 px-5 py-2 "
            >
              <span> Add To Card</span>
              <FaCartShopping />
            </button>
            <div>
              <button
                disabled={disableFavorite}
                onClick={() => handleFavorite(gadget)}
                className="p-2 border rounded-full bg-white"
              >
                <MdFavoriteBorder />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  gadget: PropTypes.object,
};

export default DetailsCard;
