import {useContext} from "react";
import {StudentContext} from '../contexts/StudentProvider'

const PresentList = () => {
	const {students, toggleHandler} = useContext(StudentContext);
	return (
		<div className="list-section present-students">
			<h2>Present Students</h2>
			<ul>
				{students
					.filter((item) => item.isPresent === true)
					.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<button onClick={() => toggleHandler(item.id)}>
								Accidentally added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentList;
