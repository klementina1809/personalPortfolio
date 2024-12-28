import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const currentLanguage = i18n.language === "it" ? "it" : "en";

	return (
		<div className="language-switcher">
			<a
				onClick={() => changeLanguage("en")}
				className={currentLanguage === "en" ? "active" : ""}
			>
				en
			</a>
			<a
				onClick={() => changeLanguage("it")}
				className={currentLanguage === "it" ? "active" : ""}
			>
				it
			</a>
		</div>
	);
}

export default LanguageSwitcher;
