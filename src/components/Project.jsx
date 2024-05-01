import React from "react";

function Project({ data }) {
	return (
		<div className="project">
			{/* <h3>{data.title}</h3> */}
			<img src={data.img} alt="" />
			<span className="date">{data.date}</span>
			<div className="info-container">
				<p className="description">{data.description} </p>
				<div className="button-container">
					<a href={data.linkWeb} target="_blank">Demo</a>
					<a href={data.linkGit} target="_blank">GitHub</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
