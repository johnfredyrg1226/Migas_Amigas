import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="pie_pagina">
      <h1 className="migas_footer"> {t('migas_footer')}</h1>
      <h2 className="h2_footer"> {t('h2_footer')}</h2>
      <p className="parrafo_footer">{t('parrafo_footer')}
      </p>
      <h3 className="h3_footer">{t('h3_footer')}</h3>
      <h3 className="h33_footer">{t('h33_footer')}</h3>
      
    </div>
  );
};

export default Footer;
