import React from "react";
import data from "../data";

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Ostmarka=()=> {
    
  const [turer, settTurer] = useState(data);
  let navigate=useNavigate();
  return (
    <div className="hoved">
    <Link to="/" className="Tilbake">
        Tilbake
      </Link>

      <h1> Turer i Østmarka</h1>
      {turer.map((x) => {
          if(x.omrade==="Ostmarka")
        return (
            
        
          <article key={x.id}>
            <img src={x.img} />
            <div turnavn={x.turnavn} />
            
            <button className="TurKnapp"onClick={()=>{navigate(`/Tur/${x.id}`)}}> {x.turnavn} </button>
          </article>
        );
      })}
    </div>
  );
};
export default Ostmarka;