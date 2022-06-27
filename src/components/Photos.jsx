import { ContextObject } from "../context";
import Image from "./Image";
function Photos() {
  function getClass(i) {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  }

  return (
    <>
      <ContextObject.Consumer>
        {(valor) => {
          const { toggleFavorite, cartItems, addCartItems } = valor;
          return valor.arrayPhotos.map((obj, ind) => (
            <Image
              key={obj.id}
              img={obj}
              className={getClass(ind)}
              toggleFavorite={toggleFavorite}
              cartItems={cartItems}
              addCartItems={addCartItems}
            />
          ));
        }}
      </ContextObject.Consumer>

      <h1>Images go here</h1>
    </>
  );
}

export default Photos;
