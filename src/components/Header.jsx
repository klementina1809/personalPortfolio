import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-grid-system";

function Header() {
	return (
		<Row>
			<Col sm={4}>
				<div className="main-photo">
					<img src="./photo/photo.jpg" alt="" />
				</div>
			</Col>
			<Col sm={8}>
				<div className="description">
				<h1>Albina Khomenko</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Suscipit facilis obcaecati autem voluptatum,
						minima officiis corrupti deserunt placeat et sed. Cum
						nesciunt tempora vitae ut similique aliquam non, sint
						accusamus modi eius suscipit commodi consequatur, alias
						necessitatibus dolor tempore aliquid dolore dignissimos
						eos minima doloribus provident.
					</p>
				</div>
			</Col>
		</Row>
	);
}

export default Header;
