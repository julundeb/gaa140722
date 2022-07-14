import React from "react";

import { useState } from "react";
import client, { urlFor } from "../utils/sanity";
import { Link,  useNavigate } from "react-router-dom";
const Ostmarka = () => {
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

 
  let navigate = useNavigate();
  return (
    <div >
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>

      <h1 className="tekst"> Turer i Østmarka</h1>
      <div className="filterside">
      {posts.map((x) => {
        if (x.omrade === "Østmarka")
          return (
            <article key={x._id}>
              {" "}
              {<img src={urlFor(x.bilde).url()} alt="" className="img" />}{" "}
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
          );return false;
      })}
    </div>
    </div>
  );
};
export default Ostmarka;
