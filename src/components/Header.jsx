import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

function Header() {
  return (
    <>
      <nav className="header">
        <h2>
          <Link to="/">Pic Some</Link>
        </h2>
        <Link to="/cart">
          <img src={cart} alt="shoppingCart" />
        </Link>
      </nav>
    </>
  );
}

export default Header;
