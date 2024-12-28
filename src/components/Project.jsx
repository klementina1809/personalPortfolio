import { useTranslation } from "react-i18next";

function Project({ data }) {
	const { t } = useTranslation();

	return (
		<div className="project">
			<img src={data.img} alt="" />
			<div className="info-container">
				<span className="date">{data.date}</span>
				<div className="description-container">
					<p className="description">{t(`projectDescriptions.${data.id}`)}</p>
				</div>
				<div className="button-container">
					<a href={data.linkWeb} target="_blank" rel="noreferrer">
						Demo
					</a>
					{data.linkGit !== null && (
						<a href={data.linkGit} target="_blank" rel="noreferrer">
							GitHub
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default Project;
