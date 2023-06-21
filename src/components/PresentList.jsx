import { useContext } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const PresentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);
	return (
		<div className="list-section present-students">
			<h2>Present Students</h2>
			<ul>
				{studentStates.students
					.filter((item) => item.isPresent === true)
					.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<button
								onClick={() =>
									dispatch({
										type: "UPDATE_STUDENT_PROPERTY",
										payload: {
											id: item.id,
											propertyName: "isPresent",
											value: !item.isPresent,
										},
									})
								}
							>
								Accidentally added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentList;
