import React from "react";
import { useTranslation } from "react-i18next";

const Empanadas = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("titleEmpanadas")}</h1>
      <br />
      <h2>{t("empanadaGallega")}.</h2>
      <img
        className="empanada_gallega"
        alt="imagen de una empanada gallega."
        src={require("../assets/empanada_gallega.jpeg")}
      />
      <p>
        La empanada por excelencia en nuestro país. Hablamos de uno de los
        platos más representativos de la gastronomía gallega. Todo un clásico
        que se reinventa con muchos más sabores y añadidos, adaptándose a los
        paladares más exigentes. En la panaderia de migas-amiga podrás comprar
        empanada artesanal, garantizando un envío desde Galicia a tu casa en 24
        horas.
      </p>
      <br />
      <h2>Empanada japonesa.</h2>
      <img
        className="empanada_japonesa"
        alt="imagen de una empanada japonesa ."
        src={require("../assets/empanada_japonesa.jpeg")}
      />
      <p>
        empanadillas japonesas son uno de los platos más conocidos y populares
        de la gastronomía japonesa. Su sabor suele gustar a todo el mundo,
        incluyendo a niños, además de que se presta a muchois rellenos
        diferentes. Verás que, siguiendo los pasos de la receta, cocinar gyoza
        en casa es más fácil de lo que parece.
      </p>
      <br />
      <h2>Empanadas colombianas .</h2>
      <img
        className="empanada_colombianas"
        alt="imagen de una empanada colombianas ."
        src={require("../assets/empanada_colombiana.jpeg")}
      />
      <p>
        Las Empanadas son un plato típico no solo de Colombia sino de muchos
        países del mundo. Pero la variante nuestra se caracteriza por su masa de
        maíz y su relleno de carne sazonada y papa, aunque existen variantes
        según cada región del país, incluso cada familia tiene su propia receta.
        En esta ocasión les presento mi receta o Empanadas de carne desmechada
      </p>
      <br />
      <h2>Empanadas argentina .</h2>
      <img
        className="empanada_argentina"
        alt="imagen de una empanada argentina ."
        src={require("../assets/empanada_argentina.jpeg")}
      />
      <p>
        Las empanadas son un plato que define a Argentina como país, un
        verdadero orgullo nacional. Se dice que Domingo Faustino Sarmiento,
        impulsor de la educación argentina, dijo durante un almuerzo tucumano:
        "Amemos, señores, la empanada nacional, sin perjuicio de saborearlas
        todas…". Y es que en Argentina, cada región del país tiene su receta
        original. Por ejemplo, la tucumana, la hecha con matambre, la salteña,
        la más chica, la que se elabora con papa, la riojana, también hecha con
        papa, además de aceitunas, huevo duro, pasas y verdeo o la jujeña que
        podemos encontrar elaborada con carne de llama, fauna autóctona de la
        región.
      </p>
    </div>
  );
};

export default Empanadas;
