import React from "react";
import { Col, Row } from "react-grid-system";

function Header() {
	return (
		<>
			<Row className="justified-center">
				<Col lg={12}>
					<h1 className="title">Albina Khomenko</h1>
				</Col>
			</Row>
			<Row className="header justified-center">
				<Col lg={2}>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/albina-khomenko/"
					>
						LinedIn
					</a>
				</Col>
				<Col lg={3}>
					<div className="main-photo">
						<img src="./photo/photo.png" alt="" />
					</div>
				</Col>
				<Col lg={2}>
					<a target="_blank" href="https://github.com/klementina1809">
						GitHub
					</a>
				</Col>
			</Row>

			<Row className="justified-center">
				<Col xs={12} lg={12} xl={8}>
					<div className="profile-description">
						<span className="label">About Me</span>
						<p style={{ marginBottom: "0" }}>
							Sono una perfezionista tenace, costantemente alla ricerca della
							soluzione ottimale e della massima qualità. La mia determinazione
							mi spinge a completare ogni compito affrontando le sfide con
							curiosità e dedizione.
						</p>
						<p>
							Dall’inizio del mio percorso come programmatrice, ho unito lo
							studio teorico attraverso corsi online alla pratica su progetti
							reali, concentrandomi in particolare su React. Durante questa
							esperienza, ho sviluppato applicazioni utilizzando tecnologie come
							React, JavaScript, TypeScript, Git, npm, librerie di terze parti,
							REST API, HTML, CSS, SASS, Bootstrap, Tailwind CSS, Material-UI e
							Metronic.
						</p>
					</div>
				</Col>
			</Row>
			<Row className="justified-center">
				<Col lg={12} xl={8}>
					<div className="profile-github">
						<span className="label">My Github Activity</span>
						<img
							src="https://ghchart.rshah.org/2887ad/klementina1809"
							alt="Klementina GitHub chart"
						/>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Header;
