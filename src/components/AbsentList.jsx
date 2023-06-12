import React from "react";

const AbsentList = (props) => {
	return (
		<div className="list-section absent-students">
			<h2>Absent Students</h2>
			{props.students
				.filter((item) => item.isPresent === false)
				.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => props.toggleHandler(item.id)}>
							Accidentally added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentList;
