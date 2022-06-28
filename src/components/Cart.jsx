import { useContext, useState } from "react";
import { ContextObject } from "../context";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems, removeCartItems, removeAllCartItems } =
    useContext(ContextObject);
  const [order, setOrder] = useState(false);

  const numberOfItemsInCart = cartItems.length;

  function totalOrderPrice(value) {
    return (value * numberOfItemsInCart).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function placeOrder() {
    setOrder(true);
    setTimeout(() => {
      console.log("order place");
      removeAllCartItems();
      setOrder(false);
    }, 3000);
  }

  return (
    <main className="cartPage">
      <h1>{numberOfItemsInCart ? "Check out" : "Thanks for your order!"}</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeCartItems={removeCartItems} />
      ))}
      <p className="totalCost">Total:{totalOrderPrice(5.99)}</p>
      {numberOfItemsInCart !== 0 && (
        <div className="orderButton">
          <button onClick={placeOrder}>
            {!order ? "Place Order" : "Ordering..."}
          </button>
        </div>
      )}
    </main>
  );
}

export default Cart;
