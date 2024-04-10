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
            <h2>Como se elavora el pan</h2>
            <a className="enlace" href="#h2Amasado"><li>1.{t("h2Amasado")}</li></a>
            <a className="enlace" href="#h2Fermentacion"><li>2.{t('h2Fermentacion')}</li></a>
            <a className="enlace" href="#h2coccion"><li>3.{t('h2coccion')}</li></a>
          </ol>
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
          <div className=".contenedor-texto">
            <ol>
              <h2 id="h2Amasado">1. {t('h2Amasado')} </h2>
              <li className="texto_uno" id="texto1">
                {t("texto_uno")}</li>
              <img className="imagen_tamaño" src={require("../assets/pan2.jpg")} />

              <h2 id="h2Fermentacion">2.{t("h2Fermentacion")}</h2>
              <li id="texto2" className="texto_dos">{t("texto_dos")}
              </li>

              <img className="imagen_tamaño" src={require("../assets/pan3.jpg")} />
              <h2 id="h2coccion">3.{t("h2coccion")}</h2>
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
