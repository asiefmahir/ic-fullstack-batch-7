import {useContext} from "react";
import {StudentContext} from '../contexts/StudentProvider'

const AbsentList = () => {
	const {studentStates, dispatch} = useContext(StudentContext)
	return (
		<div className="list-section absent-students">
			<h2>Absent Students</h2>
			{studentStates.students
				.filter((item) => item.isPresent === false)
				.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => dispatch({type: "TOGGLE_PRESENT_VALUE", payload: item.id})}>
							Accidentally added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentList;
