import { useContext } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const AllStudentList = () => {
	
	const ctx = useContext(StudentContext)

	return (
		<div className="list-section all-students">
			<h2>All Students</h2>
			<ul>
				{ctx.students.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => ctx.editHandler(item.id)}>
							Edit
						</button>
						<button onClick={() => ctx.removeHandler(item.id)}>
							Remove
						</button>
						<button onClick={() => ctx.presentHandler(item.id)}>
							Make present
						</button>
						<button onClick={() => ctx.absentHandler(item.id)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
