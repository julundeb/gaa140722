import React, { useState, useEffect } from "react";
import client from "../utils/sanity";
function Search({ placeholder }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type=="tur"]{_id,turnavn, info, omrade, km, bilde, kart}`)
      .then((turer) => {
        setPosts(turer);
        console.log(turer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [filtrertData, settFiltrertData] = useState([]);
  const [input, settinput] = useState("");

  const startFiltrering = (event) => {
    const soekeOrd = event.target.value;

    settinput(soekeOrd);
    const filtrer = posts.filter((value) => {
      if (value && value.turnavn && soekeOrd) {
        return value.turnavn.toLowerCase().includes(soekeOrd.toLowerCase());
      }
      return false;
    });

    if (soekeOrd === "") {
      settFiltrertData([]);
    } else {
      settFiltrertData(filtrer);
    }
  };

  return (
    <div className="search">
      <div>
        <input
          className="searchInputs"
          type="text"
          placeholder={"Søk etter turer..."}
          value={input}
          onChange={startFiltrering}
        />
      </div>
      {filtrertData.length !== 0 && (
        <div className="dataResult">
          {filtrertData.map((value, key) => {
            return (
              <a
                className="dataitem"
                href={`/Tur/${value._id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{value.turnavn} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
