import React, { useState } from "react";
import data from "../data";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Search({ placeholder }) {
  const [filtrertData, settFiltrertData] = useState([]);
  const [input, settinput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  const Forslag = () => {
    setIsOpen(!isOpen);
  };
  const startFiltrering = (event) => {
    const sokOrd = event.target.value;
    settinput(sokOrd);
    const nyFilter = data.filter((value) => {
      return value.turnavn.toLowerCase().includes(sokOrd.toLowerCase());
    });

    if (sokOrd === "") {
      settFiltrertData([]);
    } else {
      settFiltrertData(nyFilter);
    }
  };

  const tomtInput = () => {
    settFiltrertData([]);
    settinput("");
  };

  return (
    <div className="search">
      <div >
        <input className="searchInputs"
          type="text"
          placeholder={"Sok etter turer"}
          value={input}
          onChange={startFiltrering}
        />
      </div>
      {filtrertData.length != 0 && (
        <div className="dataResult">
          {filtrertData.map((value, key) => {
            return (
              <a className="dataitem" href={`/Tur/${value.id}`} target="_blank">
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
