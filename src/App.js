import "./App.css";
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	return (
		<div className="App">
			<StudentForm 
				studentName={studentName}
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				editMode={editMode}
				setEditMode={setEditMode}
				editableStudent={editableStudent}
				setEditableStudent={setEditableStudent}
			/>
			<StudentSection 
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				setEditMode={setEditMode}
				setEditableStudent={setEditableStudent}
			/>
		</div>
	);
};

export default App;
