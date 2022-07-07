import React from "react";
import App from "../App";
import data from "../data";
import Tur from "../Tur";
import { Routes, Route, useParams } from 'react-router-dom';

const Turinfo = ({data}) => {
    let { img} = useParams(); //hvis id er større gi error side, 
    
    return (
        <div>
            {data.filter((x)=>x.img===img).map((x, id)=>(
                <div key={id}>
                    <h1>{x.img}</h1>
                    <div>{x.turnavn}</div>
                    <div>{x.info}</div>
                <div/>
            )}

        </div>
    );
    
};
export default Turinfo;
