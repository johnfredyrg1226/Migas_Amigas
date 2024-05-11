import React from 'react'
import { useTranslation } from "react-i18next";
import "../css/menu.css";

const Menu = () => {

  const { t } = useTranslation();

  return (
    <div className='boton-grande'>
      <a className='boton-grandes' href="/">{t("navInicio")}</a>
      <a className='boton-grandes' href="/panaderia"> Ir a Panaderia </a>
      <a className='boton-grandes' href="/pasteleriaBolleria">Ir a Pasteleria Bolleria </a>
      <a className='boton-grandes' href="/empanadas">Ir a Empanadas </a>
      <a className='boton-grandes' href="/contacto">Ir a Contactos </a>
    </div>
  )
}

export default Menu
