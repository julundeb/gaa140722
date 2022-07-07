import Home from "./pages/Home";
import Turinfo from "./pages/Turinfo";
import Error from "./pages/Error";
import React from "react";
import { Routes, Route } from "react-router-dom";
import data from"./data";

export default function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />}>
        <Home data={data}/>
        <Route path="Tur">
          <Route path=":Img" element={<Turinfo />} />
          <Route path="*" element={<Error />}>
          </Route>
        </Route>
      </Route>
    </Routes>
    
  );
}
