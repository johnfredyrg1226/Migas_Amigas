import React from 'react'
import { useTranslation } from "react-i18next";
import { Languages } from '../../constants/langs.ts';

const HeaderNav = () => {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <div>
      <h1 className='titulo'>{t("titleHeader")}</h1>
      <h2 className='dostitulo'>{t("dostitleHeader")}</h2>

     <select defaultValue={i18n.language} onChange={onChangeLang}>
        {Languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

    </div>
  )
}

export default HeaderNav
