import { createContext, useState, useEffect } from "react";
import axios from "axios";
const ContextObject = createContext();

function PhotoContextProvider(props) {
  const [arrayPhotos, setArrayPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(id) {
    console.log(id);
    setArrayPhotos((prev) => {
      return prev.map((obj) => ({
        ...obj,
        isFavorite: obj.id === id ? !obj.isFavorite : obj.isFavorite,
      }));
    });
  }

  function removeCartItems(id) {
    setCartItems((prev) => prev.filter((el) => el.id !== id));
  }

  function removeAllCartItems() {
    setCartItems([]);
  }

  function addRemoveCartItems(imgObj, isInCart) {
    if (isInCart) {
      removeCartItems(imgObj.id);
    } else {
      setCartItems((prev) => [...prev, imgObj]);
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((response) => setArrayPhotos(response.data));
  }, []);

  return (
    <ContextObject.Provider
      value={{
        arrayPhotos,
        toggleFavorite,
        cartItems,
        addRemoveCartItems,
        removeCartItems,
        removeAllCartItems,
      }}
    >
      {props.children}
    </ContextObject.Provider>
  );
}

export { PhotoContextProvider, ContextObject };
