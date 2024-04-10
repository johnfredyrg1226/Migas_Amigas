import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Panaderia from '../views/Panaderia';
import PasteleriaBolleria from '../views/PasteleriaBolleria';
import Empanadas from '../views/Empanadas';
import Contacto from '../views/Contacto';
import Error404 from '../views/Error404';
import HeaderNav from '../components/layout/HeaderNav.tsx';
import Footer from '../components/layout/Footer';
import Menu from '../components/Menu.js';
import Principal from '../views/Principal';

const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav/>

      <Menu/>
      
      <br/>
      <hr />
      {/* Contenido Central */}
      <Routes>  
        <Route path="/" element={<Principal />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/pasteleriabolleria" element={<PasteleriaBolleria />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
        
      </Routes>
      {/* Footer */}
      <hr />
      <Footer/>
      </BrowserRouter>
  );
}

export default MisRutas
