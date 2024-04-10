import './App.css';
import MisRutas from './router/MisRutas'; 
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("h1_titulo")}</h1>
      <MisRutas/>
    </div>
  );
}

export default App;
