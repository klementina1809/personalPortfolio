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
				<Col lg={2} >
					<a
						target="_blank"
						href="https://www.linkedin.com/in/albina-khomenko-573823210/"
					>
						LinedIn
					</a>
				</Col>
				<Col lg={3} >
					<div className="main-photo">
						<img src="./photo/photo.png" alt="" />
					</div>
				</Col>
				<Col lg={2} >
					<a target="_blank" href="https://github.com/klementina1809">
						GitHub
					</a>
				</Col>
			</Row>

			<Row className="justified-center">
				<Col xs={12} lg={12} xl={8}>
					<div className="profile-description">
						<span className="label">About Me</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Suscipit facilis obcaecati autem voluptatum,
							minima officiis corrupti deserunt placeat et sed.
							Cum nesciunt tempora vitae ut similique aliquam non,
							sint accusamus modi eius suscipit commodi
							consequatur, alias necessitatibus dolor tempore
							aliquid dolore dignissimos eos minima doloribus
							provident.
						</p>
					</div>
				</Col>
			</Row>
			<Row className="justified-center">
				<Col lg={12} xl={8}>
					<div className="profile-github">
						<span className="label">My Github Activity</span>
						<img
							src="https://ghchart.rshah.org/klementina1809"
							alt="Klementina GitHub chart"
						/>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default Header;
