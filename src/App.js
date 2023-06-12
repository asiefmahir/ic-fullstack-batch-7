import "./App.css";
import { useState } from "react";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	const createStudentHandler = (e) => {
		e.preventDefault();
		if (!studentName) {
			return alert(`Please provide a valid name`);
		}
		const newStudent = {
		  id: Date.now(),
		  name: studentName,
		  isPresent: undefined
		}

    setStudents([...students, newStudent]);
    setStudentName('')
	};

  const removeHandler = (id) => {
    const filteredStudents = students.filter(item => item.id !== id);
    setStudents(filteredStudents)
  }


  const editHandler = (id) => {
    const toBeUpdatedStudent = students.find(item => item.id === id);
    setEditMode(true);
    setEditableStudent(toBeUpdatedStudent);
    setStudentName(toBeUpdatedStudent.name)
  }

  const updateHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
			return alert(`Please provide a valid name`);
		}

    const updatedStudentsArray = students.map((item) => {
        if (item.id === editableStudent.id) {
          item.name = studentName
        }

        return item
    });

    setStudents(updatedStudentsArray);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName('')
  }

	return (
		<div className="App">
			<form onSubmit={editMode ? updateHandler : createStudentHandler}>
				<input
					type="text"
					value={studentName}
					onChange={(e) => setStudentName(e.target.value)}
				/>
				<button type="submit">
					{editMode ? "Update Student" : "Create Student"}
				</button>
			</form>
			<div className="student-section">
				<div className="list-section all-students">
					<h2>All Students</h2>
					<ul>
						{students.map((item) => (
							<li key={item.id}>
								<span>{item.name}</span>
								<button onClick={() => editHandler(item.id)}>Edit</button>
								<button onClick={() => removeHandler(item.id)}>Remove</button>
								<button>Make present</button>
								<button>Make Absent</button>
							</li>
						))}
					</ul>
				</div>
				<div className="list-section present-students">
					<h2>Present Students</h2>
					<ul>
						{students
							.filter((item) => item.isPresent === true)
							.map((item) => (
								<li key={item.id}>
									<span>{item.name}</span>
									<button>Accidentally added</button>
								</li>
							))}
					</ul>
				</div>
				<div className="list-section absent-students">
					<h2>Absent Students</h2>
					{students
						.filter((item) => item.isPresent === false)
						.map((item) => (
							<li key={item.id}>
								<span>{item.name}</span>
								<button>Accidentally added</button>
							</li>
						))}
				</div>
			</div>
		</div>
	);
};

export default App;
