import {createContext, useState} from 'react';

export const StudentContext = createContext()

const StudentProvider = ({children}) => {
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
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};

    const updateHandler = (e) => {
		e.preventDefault();
		if (!studentName) {
			return alert(`Please provide a valid name`);
		}

		const updatedStudentsArray = students.map((item) => {
			if (item.id === editableStudent.id) {
				item.name = studentName;
			}

			return item;
		});

		setStudents(updatedStudentsArray);
		setEditMode(false);
		setEditableStudent(null);
		setStudentName("");
	};
    const removeHandler = (id) => {
		const filteredStudents = students.filter((item) => item.id !== id);
		setStudents(filteredStudents);
	};

	const editHandler = (id) => {
		const toBeUpdatedStudent = students.find((item) => item.id === id);
		setEditMode(true);
		setEditableStudent(toBeUpdatedStudent);
		setStudentName(toBeUpdatedStudent.name);
	};

	

	const presentHandler = (id) => {
		const targetedStudent = students.find(item => item.id === id);
		if (targetedStudent.isPresent === true || targetedStudent.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		const updatedStudents = students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = true
			};

			return item
		})

		setStudents(updatedStudents)
	}

    const absentHandler = (id) => {
		const targetedStudent = students.find(item => item.id === id);
		if (targetedStudent.isPresent === true || targetedStudent.isPresent === false) {
			return alert(`The student is already in a list`)
		}

		const updatedStudents = students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = false
			};

			return item
		})

		setStudents(updatedStudents)
	}

    const toggleHandler = (id) => {
		const targetedStudent = students.find(item => item.id === id);

		const updatedStudents = students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = !item.isPresent
			};

			return item
		})

		setStudents(updatedStudents)
	}

    const contextValues = {
        studentName,
        setStudentName,
        students,
        setStudents,
        editMode,
        setEditMode,
        editableStudent,
        setEditableStudent,
        createStudentHandler,
        editHandler,
        updateHandler,
        removeHandler,
        presentHandler,
        absentHandler,
        toggleHandler
    }
    return (
        <StudentContext.Provider value={contextValues}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider