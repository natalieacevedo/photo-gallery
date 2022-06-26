import { useState } from "react";
import emptyHeart from "../assets/emptyheart.png";
import filledHeart from "../assets/heart.png";
import add from "../assets/add.png";
//import { ContextObject } from "../context";

function Image({ img, className, toggleFavorite }) {
  const [hovered, setHovered] = useState(false);

  const { id, isFavorite } = img;

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
      {hovered && <img className="add" alt="heart" src={add} />}
    </div>
  );
}

export default Image;
