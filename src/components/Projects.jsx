import React, { useState, useEffect } from "react";

import { Row, Col } from "react-grid-system";
import Project from "./Project";
import data from "../data/allProjects";

function Projects() {
	const [projects, setProjects] = useState(data.projects);

	return (
		<>
			<Row>
				<h2 className="center">Projects</h2>
			</Row>
			<Row>
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
