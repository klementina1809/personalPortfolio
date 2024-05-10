import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-grid-system";

import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	return (
		<Container>
			<Header />
			<Projects />
			<Footer/>
		</Container>
	);
}

export default App;
