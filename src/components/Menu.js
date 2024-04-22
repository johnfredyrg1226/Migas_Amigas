import React from 'react'
import { useTranslation } from "react-i18next";
import "../css/menu.css";

const Menu = () => {

  const { t } = useTranslation();

  return (
    <div>
    <a className='boton-grande' type="button" href="/"><button> {t("navInicio")} </button></a>
      <a className='boton-grande' type="button" href="/panaderia"><button> Ir a Panaderia </button></a>
      <a className='boton-grande'  type="button" href="/pasteleriaBolleria"><button>Ir a Pasteleria Bolleria </button></a>
      <a className='boton-grande' type="button" href="/empanadas"><button>Ir a Empanadas </button></a>
      <a className='boton-grande' type="button" href="/contacto"><button>Ir a Contactos </button></a>
    </div>
  )
}

export default Menu
