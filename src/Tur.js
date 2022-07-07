import React from 'react';
import App from './App';
import data from './data';
import Turinfo from './pages/Turinfo';
//import sd from './bilder/stromsdammen.jpg';


export default function Tur(x){ 
  
  const Bilde = () => {
    const img = img;
        return(
            <div>
              <Turinfo img={img}/>
            </div>
        );
    }
  
  

    
  return(
      <div className='hele'>
      
      <h1 className='tekst'> {x.turnavn}</h1>
        
    
     <img src={ x.img} className='bilde'  />
    
        
        </div>
    )
  }
