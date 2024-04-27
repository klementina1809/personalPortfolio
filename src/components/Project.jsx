import React from "react";

function Project({data}) {
	return (
		<div className="project">
			<h3>{data.title}</h3>
			<img src={data.img} alt="" />
			<p className="description">{data.description} </p>
			<div>
				<button onClick={data.linkWeb}>Demo</button>
				<button onClick={data.linkGit}>GitHub</button>
			</div>
		</div>
	);
}

export default Project;
