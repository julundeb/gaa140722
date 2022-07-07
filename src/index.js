import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Turinfo from "./pages/Turinfo";
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="Tur">
          <Route path=":Img" element={<Turinfo />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
