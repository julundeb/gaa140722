import React from "react";
import { useState } from "react";
import "../App.css";
import data from "../data";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tur from "./Tur";
import client from "../utils/sanity";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

const Home = () => {
  const [posts, setPosts] = useState(null);
  client
    .fetch(`*[_type=="tur"]{turnavn, info, omrade, km, bilde}`)
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
    <div>
      <Header />
      <Navbar />
      <Search className="Sokebar" />
      <div className="hoved">
        {turer.map((x) => {
          return (
            <article key={x.id}>
              <section className="PlasseringvTur">
              <div
                  
                  onClick={() => {
                    navigate(`/Tur/${x.id}`);
                  }}
               >
                  {" "}
                  {<img src={x.img} className="img" />}{" "}</div>
                
                <div turnavn={x.turnavn} />

                <button 
                  className="TurKnapp"
                  onClick={() => {
                    navigate(`/Tur/${x.id}`);
                  }}
                >
                  {" "}
                  {x.turnavn}{" "}
                </button>
              </section>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
