import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./languages/eng.json";
import Vietnamese from "./languages/vie.json";
const resources = {
  eng: {
   translation: English
  },
  vie: {
    translation: Vietnamese
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("bao-chay") || "vie",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
