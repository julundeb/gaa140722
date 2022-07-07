import React from 'react'
import '../App.css';
import App from "../App";
import Header from "../Header"
import Vettakollen from "../Vettakollen";
import Tur from "../Tur";
import data from "../data";
import { useNavigate } from 'react-router-dom';

//Her må jeg sende data til tur som lager turinfo


export default function Home() {
  //<Tur data={data}/>;
  //<Turinfo data={data}/>;
  
  let navigate=useNavigate();
  const turer = data.map((x) => {
    
    return <Tur key={x.id}
    onClick={(img={x,img}) => {navigate("/turnavn");}}  
    turnavn={x.turnavn} />;
  });

  return (
    <div>
        <h1>Home</h1>
      <Header />
      <section className="turliste">{turer}</section>
    </div>
  );
}
