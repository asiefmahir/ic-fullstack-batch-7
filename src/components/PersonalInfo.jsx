import React from "react";

const PersonalInfo = (props) => {
	return (
		<div className="personal-info">
			<p>
				<strong>name:</strong> {props.name}
			</p>
			<p>
				<strong>age:</strong>
				{props.age}
			</p>
		</div>
	);
};

export default PersonalInfo;
