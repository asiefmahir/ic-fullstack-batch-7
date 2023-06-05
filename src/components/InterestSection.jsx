import React from "react";

const InterestSection = (props) => {
	return (
		<div className="interests">
			<h2>My Interests:</h2>
			<ul>
				{props.interests.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default InterestSection;
