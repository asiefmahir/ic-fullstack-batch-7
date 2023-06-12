const AllStudentList = (props) => {
	


    const removeHandler = (id) => {
		const filteredStudents = props.students.filter((item) => item.id !== id);
		props.setStudents(filteredStudents);
	};

	const editHandler = (id) => {
		const toBeUpdatedStudent = props.students.find((item) => item.id === id);
		props.setEditMode(true);
		props.setEditableStudent(toBeUpdatedStudent);
		props.setStudentName(toBeUpdatedStudent.name);
	};

	

	const presentHandler = (id) => {
		const targetedStudent = props.students.find(item => item.id === id);
		if (targetedStudent.isPresent === true || targetedStudent.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		const updatedStudents = props.students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = true
			};

			return item
		})

		props.setStudents(updatedStudents)
	}

	const absentHandler = (id) => {
		const targetedStudent = props.students.find(item => item.id === id);
		if (targetedStudent.isPresent === true || targetedStudent.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		const updatedStudents = props.students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = false
			};

			return item
		})

		props.setStudents(updatedStudents)
	}

	return (
		<div className="list-section all-students">
			<h2>All Students</h2>
			<ul>
				{props.students.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => editHandler(item.id)}>
							Edit
						</button>
						<button onClick={() => removeHandler(item.id)}>
							Remove
						</button>
						<button onClick={() => presentHandler(item.id)}>
							Make present
						</button>
						<button onClick={() => absentHandler(item.id)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
