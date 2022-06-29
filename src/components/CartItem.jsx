import trash from "../assets/emptyTrash.png";
import filledTrash from "../assets/trash.png";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
function CartItem({ item, removeCartItems }) {
  const [hovered, enter, leave, ref] = useHover();
  return (
    <div className="cartItem">
      <img
        className="chosenImage"
        src={item.url}
        width="130px"
        alt="chosenImage"
      />
      <img
        ref={ref}
        onClick={() => removeCartItems(item.id)}
        className="trashIcon"
        src={hovered ? filledTrash : trash}
        alt="trashIcon"
      />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({ url: PropTypes.string.isRequired }),
};
export default CartItem;
