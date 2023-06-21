import { useContext } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const AllStudentList = () => {
	
	const {studentStates, dispatch} = useContext(StudentContext);

	const presentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		dispatch({type: 'UPDATE_STUDENT_PROPERTY', payload: {id: student.id, propertyName: 'isPresent', value: true}})
	}

	const absentHandler = (student) => {
		if (student.isPresent === true || student.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		dispatch({type: 'UPDATE_STUDENT_PROPERTY', payload: {id: student.id, propertyName: 'isPresent', value: false}})
	}

	return (
		<div className="list-section all-students">
			<h2>All Students</h2>
			<ul>
				{studentStates.students.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => dispatch({type: "EDIT_STUDENT", payload: item.id})}>
							Edit
						</button>
						<button onClick={() => dispatch({type: "REMOVE_STUDENT", payload: item.id})}>
							Remove
						</button>
						<button onClick={() => presentHandler(item)}>
							Make present
						</button>
						<button onClick={() => absentHandler(item)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
