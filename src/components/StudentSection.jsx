import React from "react";
import AllStudentList from "./AllStudentList";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";

const StudentSection = (props) => {
    const toggleHandler = (id) => {
		const targetedStudent = props.students.find(item => item.id === id);

		const updatedStudents = props.students.map((item) => {
			if (item.id === targetedStudent.id) {
				item.isPresent = !item.isPresent
			};

			return item
		})

		props.setStudents(updatedStudents)
	}
	return (
		<div className="student-section">
			<AllStudentList 
                setStudentName={props.setStudentName}
				students={props.students}
				setStudents={props.setStudents}
				setEditMode={props.setEditMode}
				setEditableStudent={props.setEditableStudent}
            />
            <PresentList 
                students={props.students}
                toggleHandler={toggleHandler}
            />
			<AbsentList 
                students={props.students}
                toggleHandler={toggleHandler}
            />
		</div>
	);
};

export default StudentSection;
