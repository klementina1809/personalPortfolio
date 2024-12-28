import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import it from "./locales/it.json";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: en,
			},
			it: {
				translation: it,
			}
		},
		fallbackLng: "en",
		debug: true,
		detection: {
			order: ["navigator", "htmlTag", "path", "subdomain"],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
