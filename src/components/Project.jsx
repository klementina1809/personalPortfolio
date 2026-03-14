import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectModal from "./ProjectModal";

function Project({ data }) {
	const { t } = useTranslation();
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="project">
			{data.video ? (
				<a href={data.linkWeb} target="_blank" rel="noreferrer" className="video-wrapper">
					<video src={data.video} autoPlay muted playsInline loop />
				</a>
			) : (
				<a href={data.linkWeb} target="_blank" rel="noreferrer">
					<img src={data.img} alt="" />
				</a>
			)}
			<div className="info-container">
				<span className="date">{data.date}</span>
				<div className="description-container">
					<p className="description">{t(`projectDescriptions.${data.id}`)}</p>
				</div>
				<div className="button-container">
					{data.linkWeb && data.linkWeb.trim() !== "" ? (
						<a href={data.linkWeb} target="_blank" rel="noreferrer">
							Demo
						</a>
					) : (
						<span className="disabled-button">Demo</span>
					)}
					{!data.aiFree && (
						<button className="demo-button" onClick={() => setModalOpen(true)}>
							Read more
						</button>
					)}
					{data.linkGit !== null && (
						<a href={data.linkGit} target="_blank" rel="noreferrer">
							GitHub
						</a>
					)}
				</div>
			</div>

			{modalOpen && <ProjectModal data={data} onClose={() => setModalOpen(false)} />}
		</div>
	);
}

export default Project;
