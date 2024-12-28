import { Container } from "react-grid-system";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import "./App.css";

function App() {
	const { t } = useTranslation();
	return (
		<Container>
			<LanguageSwitcher />
			<Header />
			<Projects />
			<Footer />
		</Container>
	);
}

export default App;
