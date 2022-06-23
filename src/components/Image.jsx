import { useState } from "react";
import emptyHeart from "../assets/emptyheart.png";
import filledHeart from "../assets/heart.png";
import add from "../assets/add.png";
//import { ContextObject } from "../context";

function Image({ img, className, toggleFavorite }) {
  const [hovered, setHovered] = useState(false);

  const { id, isFavorite } = img;

  function heart() {
    let chosenHeart;
    if (isFavorite) {
      chosenHeart = filledHeart;
    } else if (hovered && !isFavorite) {
      chosenHeart = emptyHeart;
    } else {
      chosenHeart = "";
    }
    return chosenHeart;
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} image-container`}
    >
      <img alt="random-pic" src={img.url} className="image-grid" />

      <img
        className="heart"
        alt={hovered ? "heart" : ""}
        onClick={() => toggleFavorite(id)}
        src={heart()}
      />
      {hovered && <img className="add" alt="heart" src={add} />}
    </div>
  );
}

export default Image;
