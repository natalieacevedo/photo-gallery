//import { useState } from "react";
import useHover from "../hooks/useHover";

import emptyHeart from "../assets/emptyheart.png";
import filledHeart from "../assets/heart.png";
import shoppingCart from "../assets/shoppingCart.png";
import add from "../assets/add.png";
import PropTypes from "prop-types";

function Image({
  img,
  className,
  toggleFavorite,
  cartItems,
  addRemoveCartItems,
}) {
  const [hovered, enter, leave, ref] = useHover();

  const { id, isFavorite } = img;
  const isInCart = cartItems.some((el) => el.id === id);

  return (
    <div ref={ref} className={`${className} image-container`}>
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
          onClick={() => addRemoveCartItems(img, isInCart)}
          className="add"
          alt="add or cart item"
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
