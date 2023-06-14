import {useContext} from "react";
import {StudentContext} from '../contexts/StudentProvider'

const AbsentList = () => {
	const {students, toggleHandler} = useContext(StudentContext)
	return (
		<div className="list-section absent-students">
			<h2>Absent Students</h2>
			{students
				.filter((item) => item.isPresent === false)
				.map((item) => (
					<li key={item.id}>
						<span>{item.name}</span>
						<button onClick={() => toggleHandler(item.id)}>
							Accidentally added
						</button>
					</li>
				))}
		</div>
	);
};

export default AbsentList;
