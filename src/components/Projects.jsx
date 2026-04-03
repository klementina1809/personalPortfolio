import { useState } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

import data from "../data/allProjects";
import Project from "./Project";

function Projects() {
	const { t } = useTranslation();
	const [projects] = useState(data.projects);

	const recentProjects = projects
		.filter((p) => !p.aiFree && !p.hidden)
		.sort((a, b) => {
			if (a.comingSoon !== b.comingSoon) return a.comingSoon ? -1 : 1;
			return b.id - a.id;
		});
	const aiProjects = projects
		.filter((p) => p.aiFree && !p.hidden)
		.sort((a, b) => b.id - a.id);

	return (
		<>
			<Row>
				<h2 className="center" style={{ fontWeight: 700 }}>
					{t("header.projects")}
				</h2>
			</Row>
			<Row className="projects-container">
				{recentProjects.map((project) => (
					<Col sm={12} md={6} xl={4} key={project.id}>
						<Project data={project} />
					</Col>
				))}
			</Row>
			<Row>
				<div className="projects-intro">
					<h3 className="projects-intro__subtitle">
						{t("header.projectsSubtitle")}
					</h3>
					<p className="projects-intro__description">
						{t("header.projectsDescription")}
					</p>
				</div>
			</Row>
			<Row className="projects-container">
				{aiProjects.map((project) => (
					<Col sm={12} md={6} xl={4} key={project.id}>
						<Project data={project} />
					</Col>
				))}
			</Row>
		</>
	);
}

export default Projects;
