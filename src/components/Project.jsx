import { useTranslation } from "react-i18next";

function Project({ data }) {
	const { t } = useTranslation();

	return (
		<div className="project">
			{data.video ? (
				<a
					href={data.linkWeb}
					target="_blank"
					rel="noreferrer"
					style={{
						display: "block",
						overflow: "hidden",
						borderRadius: "8px",
						boxShadow: "5px 3px 9px 0px #00000030",
					}}
				>
					<video
						src={data.video}
						autoPlay
						muted
						playsInline
						loop
						style={{
							width: "100%",
							display: "block",
							transform: "scale(1.18)",
						}}
					/>
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
