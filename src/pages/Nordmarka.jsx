import React from "react";
import data from "../data";
import Navbar from "../components/Navbar";
import client, { urlFor } from "../utils/sanity";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Nordmarka = () => {
  const [posts, setPosts] = useState([]);
  client
    .fetch(`*[_type=="tur"]{_id,turnavn, info, omrade, km, bilde, kart}`)
    .then((turer) => {
      setPosts(turer);
      console.log(turer);
    })
    .catch((error) => {
      console.log(error);
    });

  const [turer, settTurer] = useState(data);
  let navigate = useNavigate();
  return (
    <div >
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>
      <h1 className="tekst"> Turer i Nordmarka</h1>
      <div className="filterside">
      {posts.map((x) => {
        if (x.omrade === "Nordmarka")
          return (
            <article key={x._id}>
              {" "}
              {<img src={urlFor(x.bilde).url()} className="img" />}{" "}
              <div turnavn={x.turnavn} />
              <button
                className="FilterTurknapp"
                onClick={() => {
                  navigate(`/Tur/${x._id}`);
                }}
              >
                {" "}
                {x.turnavn}{" "}
              </button>
            </article>
          );
      })}
    </div>
    </div>
  );
};
export default Nordmarka;
