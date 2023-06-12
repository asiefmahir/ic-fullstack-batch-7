import React from "react";

const PresentList = (props) => {
	return (
		<div className="list-section present-students">
			<h2>Present Students</h2>
			<ul>
				{props.students
					.filter((item) => item.isPresent === true)
					.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<button onClick={() => props.toggleHandler(item.id)}>
								Accidentally added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentList;
