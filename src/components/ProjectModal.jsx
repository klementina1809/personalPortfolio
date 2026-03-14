import { useTranslation } from "react-i18next";

function ProjectModal({ data, onClose }) {
	const { t } = useTranslation();

	return (
		<div className="project-modal-overlay" onClick={onClose}>
			<div className="project-modal" onClick={(e) => e.stopPropagation()}>
				<button className="project-modal-close" onClick={onClose}>✕</button>
				<h3 className="project-modal-title">{data.title}</h3>
				{data.techStack && (
					<div className="project-modal-stack">
						{data.techStack.map((tech) => (
							<span key={tech} className="project-modal-tag">{tech}</span>
						))}
					</div>
				)}
				<p className="project-modal-description">{t(`projectDetails.${data.id}`)}</p>
			</div>
		</div>
	);
}

export default ProjectModal;
