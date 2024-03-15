import React from "react";

import { Row, Col } from "react-grid-system";
import Project from "./Project";

function Projects() {
	return (
		<>
			<Row>
				<h2 className="center">Projects</h2>
			</Row>
			<Row className="all-projects">
				<Col sm={4}>
					<Project />
				</Col>
				<Col sm={4}>
					<Project />
				</Col>
				<Col sm={4}>
					<Project />
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<Project />
				</Col>
				<Col sm={4}>
					<Project />
				</Col>
				<Col sm={4}>
					<Project />
				</Col>
			</Row>
		</>
	);
}

export default Projects;
