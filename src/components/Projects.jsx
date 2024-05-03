import React, { useState, useEffect } from "react";

import { Row, Col } from "react-grid-system";
import Project from "./Project";
import data from "../data/allProjects";

function Projects() {
	const [projects, setProjects] = useState(data.projects);

	return (
		<>
			<hr />
			<Row style={{ marginTop: 40 }}>
				<h2 className="center" style={{ fontWeight: 700 }}>
					PROJECTS
				</h2>
			</Row>
			<Row className="projects-container">
				{projects
					.sort((a, b) => b.id - a.id)
					.map((project) => {
						return (
							<Col sm={4} key={project.id}>
								<Project data={project} />
							</Col>
						);
					})}
			</Row>
		</>
	);
}

export default Projects;
