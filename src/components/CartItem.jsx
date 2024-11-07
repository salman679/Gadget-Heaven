import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { addLocalItem } from "../utils/localstorage";
import toast from "react-hot-toast";

export default function CartItem({ cartItem, addButton = false }) {
  function handleCart(Item) {
    addLocalItem("cart", Item);

    toast.success("Successfully Added The Item!!");
  }
  return (
    <div className="rounded-2xl bg-white p-7 flex justify-between ">
      <div className="flex  gap-4">
        <div className="w-48 h-32">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={cartItem.product_image}
            alt={cartItem.product_title}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg">{cartItem.product_title}</h1>
          <p className="text-gray-500">{cartItem.description}</p>
          <span className="font-semibold text-base">
            Price:${cartItem.price}
          </span>
          {addButton ? (
            <button
              className="bg-purple-600 items-center rounded-full font-bold text-white border border-purple-600 gap-2 px-5 py-2 max-w-40"
              onClick={() => handleCart(cartItem)}
            >
              Add To Cart
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        <IoIosCloseCircleOutline fontSize={26} color="#FF0000" />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
  addButton: PropTypes.bool,
};
