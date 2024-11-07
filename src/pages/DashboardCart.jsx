import { useEffect, useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { getLocalItem } from "../utils/localstorage";
import CartItem from "../components/CartItem";

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
    setTotalPrice(0);
    setCartItem([]);

    setModal(true);
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
            {/* <button
              className="bg-purple-600 flex items-center rounded-full font-bold text-white border border-purple-600 gap-2 px-5 py-2"
              onClick={handlePurchase}
            >
              Purchase
            </button> */}

            <button
              className="btn bg-purple-600 flex items-center rounded-full font-bold text-white border border-purple-600 gap-2 px-5 py-2"
              onClick={handlePurchase}
            >
              Purchase
            </button>

            {modal && (
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            )}
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
