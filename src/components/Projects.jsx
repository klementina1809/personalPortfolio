import { useState } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import data from "../data/allProjects";
import Project from "./Project";

function Projects() {
	const { t } = useTranslation();
	const [projects, setProjects] = useState(data.projects);

	return (
		<>
			<hr />
			<Row>
				<h2 className="center" style={{ fontWeight: 700 }}>
					{t("header.projects")}
				</h2>
			</Row>
			<Row className="projects-container">
				{projects
					.sort((a, b) => b.id - a.id)
					.map((project) => {
						return (
							<Col sm={12} md={6} xl={4} key={project.id}>
								<Project data={project} />
							</Col>
						);
					})}
			</Row>
		</>
	);
}

export default Projects;
