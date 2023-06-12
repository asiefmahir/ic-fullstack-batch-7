const StudentForm = (props) => {

    const createStudentHandler = (e) => {
		e.preventDefault();
		if (!props.studentName) {
			return alert(`Please provide a valid name`);
		}
		const newStudent = {
			id: Date.now(),
			name: props.studentName,
			isPresent: undefined,
		};

		props.setStudents([...props.students, newStudent]);
		props.setStudentName("");
	};

    const updateHandler = (e) => {
		e.preventDefault();
		if (!props.studentName) {
			return alert(`Please provide a valid name`);
		}

		const updatedStudentsArray = props.students.map((item) => {
			if (item.id === props.editableStudent.id) {
				item.name = props.studentName;
			}

			return item;
		});

		props.setStudents(updatedStudentsArray);
		props.setEditMode(false);
		props.setEditableStudent(null);
		props.setStudentName("");
	};
	return (
		<form onSubmit={props.editMode ? updateHandler : createStudentHandler}>
			<input
				type="text"
				value={props.studentName}
				onChange={(e) => props.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{props.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

export default StudentForm;
