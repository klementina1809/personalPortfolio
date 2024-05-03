import React from "react";
import { Row, Col } from "react-grid-system";

function Header() {
	return (
		<>
			<Row>
				<Col sm={4}>
					<div className="main-photo">
						<img src="./photo/photo.jpg" alt="" />
					</div>
				</Col>
				<Col sm={8}>
					<div className="profile-description">
						<h1>Albina Khomenko</h1>
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
			<Row>
				<Col sm={12}>
					<img
						src="https://ghchart.rshah.org/klementina1809"
						alt="Klementina GitHub chart"
					/>
				</Col>
			</Row>
		</>
	);
}

export default Header;
