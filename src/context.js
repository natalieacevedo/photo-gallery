import { createContext, useState, useEffect } from "react";
import axios from "axios";
const ContextObject = createContext();

function PhotoContextProvider(props) {
  const [arrayPhotos, setArrayPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((response) => setArrayPhotos(response.data));
  }, []);

  return (
    <ContextObject.Provider value={{ arrayPhotos }}>
      {props.children}
    </ContextObject.Provider>
  );
}

export { PhotoContextProvider, ContextObject };
