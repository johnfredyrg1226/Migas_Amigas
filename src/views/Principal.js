import React from "react";
import "../css/principal.css";
import { useTranslation } from "react-i18next";


const Principal = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div>
        <section>
          <ol>
            <li><h2>Como se elavora el pan</h2></li>
            <li><a className="enlace" href="#h2Amasado">1.{t("h2Amasado")}</a></li>
            <li><a className="enlace" href="#h2Fermentacion">2.{t('h2Fermentacion')}</a></li>
            <li><a className="enlace" href="#h2coccion">3.{t('h2coccion')}</a></li>
          </ol>
          <br />
        </section>
        <section>
          <div className=".contenedor-principal">

            <img className="imagen_tamaño"
              alt="imegen de elaboracion de pan"
              src={require("../assets/pan1.jpeg")} />
            <img className="imagen_tamaño"
              alt="imegen de elaboracion de pan"
              src={require("../assets/fondo.jpg")} />
          </div>
          <br />
          <br />
          <div className=".contenedor-texto">
            <ol>
              <li><h2 id="h2Amasado">1. {t('h2Amasado')} </h2></li>
              <li className="texto_uno" id="texto1">
                {t("texto_uno")}</li>
              <li><img alt="imagen de unas manos amasando el pan" className="imagen_tamaño" src={require("../assets/pan2.jpg")} /></li>
              <li><h2 id="h2Fermentacion">2.{t("h2Fermentacion")}</h2></li>
              <li id="texto2" className="texto_dos">{t("texto_dos")}
              </li>
              <li><img alt="imagen de pan, partido a la mitas recien hecho" className="imagen_tamaño" src={require("../assets/pan3.jpg")} /></li>
              <li><h2 id="h2coccion">3.{t("h2coccion")}</h2></li>
              <li id="texto3" className="texto_tres">
                {t('texto_tres')}
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Principal;
