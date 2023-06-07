import React from "react";

const SkillSection = (props) => {
	return (
		<div className="skills">
			<h2>My Skills:</h2>
			<ul>
				{props.skills.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillSection;
