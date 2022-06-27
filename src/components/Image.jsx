import { useState } from "react";
import emptyHeart from "../assets/emptyheart.png";
import filledHeart from "../assets/heart.png";
import shoppingCart from "../assets/shoppingCart.png";
import add from "../assets/add.png";
import PropTypes from "prop-types";

function Image({ img, className, toggleFavorite, cartItems, addCartItems }) {
  const [hovered, setHovered] = useState(false);

  const { id, isFavorite } = img;
  const isInCart = cartItems.some((el) => el.id === id);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img alt="random-pic" src={img.url} className="image-grid" />
      {(isFavorite || hovered) && (
        <img
          className="heart"
          alt="heart"
          onClick={() => toggleFavorite(id)}
          src={isFavorite ? filledHeart : emptyHeart}
        />
      )}
      {(hovered || isInCart) && (
        <img
          onClick={() => addCartItems(img)}
          className="add"
          alt="heart"
          src={isInCart ? shoppingCart : add}
        />
      )}
    </div>
  );
}
//`id`, `url`, and`isFavorite`;// ojo con el casing raro pero aqui es con lowercase
Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  className: PropTypes.string,
};

export default Image;
