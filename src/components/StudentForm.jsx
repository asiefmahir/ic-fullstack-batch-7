import { useContext } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const StudentForm = () => {
	const ctx = useContext(StudentContext)
	
	return (
		<form onSubmit={ctx.editMode ? ctx.updateHandler : ctx.createStudentHandler}>
			<input
				type="text"
				value={ctx.studentName}
				onChange={(e) => ctx.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{ctx.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
