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
						<button onClick={() => dispatch({type: 'UPDATE_STUDENT_PROPERTY', payload: {id: item.id, propertyName: 'isPresent', value: !item.isPresent}})}>
							Accidentally added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentList;
