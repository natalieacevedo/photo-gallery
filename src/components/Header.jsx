import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
import { useContext } from "react";
import { ContextObject } from "../context";
import emptyCart from "../assets/emptyCart.png";

function Header() {
  const { cartItems } = useContext(ContextObject);

  const itemsInCart = cartItems.length;
  return (
    <>
      <nav className="header">
        <h2>
          <Link to="/">Pic Some</Link>
        </h2>
        <Link
          style={{
            pointerEvents: itemsInCart ? "" : "none",
          }}
          to="/cart"
        >
          <img src={itemsInCart ? cart : emptyCart} alt="shoppingCart" />
        </Link>
      </nav>
    </>
  );
}

export default Header;
