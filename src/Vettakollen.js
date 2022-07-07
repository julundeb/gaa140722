import React from 'react';
import vb from './bilder/vettakollen.jpg';
function Vettakollen(){
  const turnavn="Vettakollen"
    return(
      <div classname='vettakollenhele'>
      <><h1 className='vettakollentekst'></h1>
      <img src={vb}  className='vettakollenb'/></>
      </div>
    )
  }
  export default Vettakollen