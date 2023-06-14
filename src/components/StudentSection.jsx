
import AllStudentList from "./AllStudentList";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";

const StudentSection = () => {
    
	return (
		<div className="student-section">
			<AllStudentList />
            <PresentList />
			<AbsentList />
		</div>
	);
};

export default StudentSection;
