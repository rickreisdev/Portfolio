import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslate from "../locale/en.json";
import ptTranslate from "../locale/pt.json";

// Função para obter o idioma inicial
const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem(
        "selectedLanguage"
    );
    if (
        savedLanguage &&
        (savedLanguage === "pt" || savedLanguage === "en")
    ) {
        return savedLanguage;
    }
    const navigatorLng = navigator.language;
    return navigatorLng.includes("pt") ? "pt" : "en";
};

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enTranslate,
        },
        pt: {
            ...ptTranslate,
        },
    },
    lng: getInitialLanguage(),
    fallbackLng: "en",
    debug: false,

    interpolation: {
        escapeValue: false,
    },
});

i18n.on("languageChanged", (lng) => {
    localStorage.setItem("selectedLanguage", lng);
});

export default i18n;
