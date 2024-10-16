import React from "react";
import { Row, Col } from "react-grid-system";

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
							Il mio percorso da programmatrice e iniziato circa un anno fa e da
							allora ho combinato lo studio attraverso corsi online con la
							pratica diretta di progetti React. I progetti che ho sviluppato
							usano: React, JavaScript, TypeScript Git, npm, HTML, CSS, SASS,
							Bootstrap, Tailwind.
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
