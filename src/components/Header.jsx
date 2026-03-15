import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import ParallaxHero from "./ParallaxHero";

function Header() {
	const { t } = useTranslation();

	return (
		<section className="header-hero">
			<ParallaxHero />
			<div className="header-hero-inner">
				<Row className="justified-center">
					<Col lg={12}>
						<h1 className="title">Albina Khomenko</h1>
					</Col>
				</Row>
				<Row className="header justified-center">
					<Col lg={2}>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/albina-khomenko/"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</Col>
					<Col lg={3}>
						<div className="main-photo">
							<img src="./photo/photo.png" alt="" />
						</div>
					</Col>
					<Col lg={2}>
						<a
							target="_blank"
							href="https://github.com/klementina1809"
							rel="noreferrer"
						>
							GitHub
						</a>
					</Col>
				</Row>

				<Row className="justified-center">
					<Col lg={11} xl={7}>
						<div className="profile-github">
							<span className="label">{t("header.githubActivity")}</span>
							<a
								href="https://github.com/klementina1809"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://ghchart.rshah.org/2887ad/klementina1809"
									alt="Klementina GitHub chart"
								/>
							</a>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}

export default Header;
