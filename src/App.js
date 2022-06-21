import "./styles/root.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Photos from "./components/Photos";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Photos />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
