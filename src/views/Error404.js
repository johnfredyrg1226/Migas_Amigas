import React from 'react'
import '../css/error.css';

const Error404 = () => {
  return (
    <div className='error'>
    <br/>
      <img className='imagen' alt='imagen de error, pagina no encontrada' src={require("../assets/error_homer.jpeg")}/>
    <br/>
    </div>
  )
}

export default Error404
