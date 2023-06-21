import { useContext } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const StudentForm = () => {
	const { studentStates, dispatch } = useContext(StudentContext);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				studentStates.editMode
					? dispatch({
							type: "UPDATE_STUDENT_PROPERTY",
							payload: { id: studentStates.editableStudent.id , propertyName: 'name', value: studentStates.studentName}
					  })
					: dispatch({ type: "CREATE_STUDENT" });
			}}
		>
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) =>
					dispatch({
						type: "CHANGE_STUDENT_NAME",
						payload: e.target.value,
					})
				}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
