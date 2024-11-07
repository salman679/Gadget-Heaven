import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { getLocalItem } from "../utils/localstorage";

export default function Wishlist() {
  const [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    const addFavorite = getLocalItem("favorite");
    setCartItem(addFavorite);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-28 py-6">
      <h4 className="font-bold text-lg">WishList</h4>

      <div className="flex flex-col gap-7 mt-7 mb-24 ">
        {cartItems.map((item) => (
          <CartItem key={item.product_id} cartItem={item} addButton={true} />
        ))}

        {cartItems.length === 0 && (
          <h4 className="text-center font-bold text-2xl">No Data Found</h4>
        )}
      </div>
    </div>
  );
}
