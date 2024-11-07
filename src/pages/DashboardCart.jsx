import { useEffect, useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { getLocalItem } from "../utils/localstorage";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";

export default function DashboardCart() {
  const [cartItems, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const allCarts = getLocalItem("cart");
    setCartItem(allCarts);
  }, []);

  useEffect(() => {
    const totalPrice = cartItems?.reduce(
      (a, item) => a + parseInt(item.price),
      0
    );

    setTotalPrice(totalPrice);
  }, [cartItems]);

  function handleSort() {
    const sortedItem = [...cartItems].sort((a, b) => b.price - a.price);

    setCartItem(sortedItem);
  }

  function handlePurchase() {
    setModal(true);
  }

  function onClose() {
    setTotalPrice(0);
    setCartItem([]);
    setModal(false);
  }

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-28 py-6">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-lg">Cart</h4>

          <div className="flex gap-3 items-center">
            <p className="font-bold">Total cost:{totalPrice}</p>
            <button
              className="bg-white flex items-center rounded-full font-bold text-purple-600 border border-purple-600 gap-2 px-5 py-2"
              onClick={handleSort}
            >
              <span>Sort by Price</span>
              <GoSortDesc />
            </button>

            <button
              className="btn bg-purple-600 flex items-center rounded-full font-bold text-white border border-purple-600 gap-2 px-5 py-2"
              onClick={handlePurchase}
              disabled={totalPrice === 0}
            >
              Purchase
            </button>

            {modal && <Modal onClose={onClose} total={totalPrice} />}
          </div>
        </div>

        <div className="flex flex-col gap-7 mt-7 mb-24 ">
          {cartItems.map((item) => (
            <CartItem key={item.product_id} cartItem={item} />
          ))}

          {cartItems.length === 0 && (
            <h4 className="text-center font-bold text-2xl">No Data Found</h4>
          )}
        </div>
      </div>
    </>
  );
}
