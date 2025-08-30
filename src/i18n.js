/* eslint-disable */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "id",
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      en: { common: require("../public/locales/en/common.json") },
      id: { common: require("../public/locales/id/common.json") },
    },
  });
}

export default i18n;
