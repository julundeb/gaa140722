import React from "react";
import data from "../data";

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Lillomarka = () => {
  const [turer, settTurer] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="hoved">
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>

      <h1> Turer i Lillomarka</h1>
      {turer.map((x) => {
        if (x.omrade === "Lillomarka")
          return (
            <article key={x.id}>
              <img src={x.img} />
              <div turnavn={x.turnavn} />

              <button className="TurKnapp"
                onClick={() => {
                  navigate(`/Tur/${x.id}`);
                }}
              >
                {" "}
                {x.turnavn}{" "}
              </button>
            </article>
          );
      })}
    </div>
  );
};
export default Lillomarka;
