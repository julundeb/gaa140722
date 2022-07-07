import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import data from "../data";
import { useEffect } from "react/cjs/react.production.min";
//import sd from './bilder/stromsdammen.jpg';

const Tur = () => {
  const { id } = useParams();

  const Tur = data.find((x) => x.id === parseInt(id));
  const { turnavn, img, info,km } = Tur;
  return (
    <div className="EnHelTur">
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>
      <h1>{turnavn}</h1>
      <p>{km} km</p>
      <img src ={img} className="Turbilde"/>
      <p className="Infotekst">{info}</p>
    </div>
  );
};
export default Tur;
