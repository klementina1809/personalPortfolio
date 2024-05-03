import React from "react";
import { Row, Col } from "react-grid-system";

function Header() {
	return (
		<>
			<Row className="justified-center">
				<Col sm={12}>
					<h1 className="title">Albina Khomenko</h1>
				</Col>
			</Row>
			<Row className="justified-center">
				<Col sm={4}>
					<div className="main-photo">
						<img src="./photo/photo.jpg" alt="" />
					</div>
				</Col>
			</Row>

			<Row className="justified-center">
				<Col sm={8}>
					<div className="profile-description">
						<span className="label">About Me</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
							facilis obcaecati autem voluptatum, minima officiis corrupti
							deserunt placeat et sed. Cum nesciunt tempora vitae ut similique
							aliquam non, sint accusamus modi eius suscipit commodi
							consequatur, alias necessitatibus dolor tempore aliquid dolore
							dignissimos eos minima doloribus provident.
						</p>
					</div>
				</Col>
			</Row>
			<Row className="justified-center">
				<Col sm={8} style={{ textAlign: "left" }}>
					<span className="label">My Github Activity</span>
					<img
						src="https://ghchart.rshah.org/klementina1809"
						alt="Klementina GitHub chart"
						style={{
							width: "100%",
							filter: "hue-rotate(100deg)",
							marginTop: 10,
							marginBottom: 40,
						}}
					/>
				</Col>
			</Row>
		</>
	);
}

export default Header;
