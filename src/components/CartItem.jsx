import trash from "../assets/emptyTrash.png";
import filledTrash from "../assets/trash.png";
import { useState } from "react";
function CartItem({ item, removeCartItems }) {
  const [hoveredTrash, setHoveredTrash] = useState(false);
  return (
    <div className="cartItem">
      <img
        className="chosenImage"
        src={item.url}
        width="130px"
        alt="chosenImage"
      />
      <img
        onMouseEnter={() => setHoveredTrash(true)}
        onMouseLeave={() => setHoveredTrash(false)}
        onClick={() => removeCartItems(item.id)}
        className="trashIcon"
        src={hoveredTrash ? filledTrash : trash}
        alt="trashIcon"
      />
      <p>$5.99</p>
    </div>
  );
}
export default CartItem;
