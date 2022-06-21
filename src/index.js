import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PhotoContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <Router>
        <App />
      </Router>
    </PhotoContextProvider>
  </React.StrictMode>
);
