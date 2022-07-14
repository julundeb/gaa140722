import React from "react";
import client, { urlFor } from "../utils/sanity";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
const LengdeSide3 = () => {
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
    <div>
      <Link to="/" className="Tilbake">
        Tilbake
      </Link>

      <h1 className="tekst"> Turer med lengde 6-9 km</h1>
      <div className="filterside">
        {posts.map((x) => {
          if (x.km >= 6 && x.km <= 15)
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
export default LengdeSide3;
