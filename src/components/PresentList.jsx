import {useContext} from "react";
import {StudentContext} from '../contexts/StudentProvider'

const PresentList = () => {
	const {studentStates, dispatch} = useContext(StudentContext);
	return (
		<div className="list-section present-students">
			<h2>Present Students</h2>
			<ul>
				{studentStates.students
					.filter((item) => item.isPresent === true)
					.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<button onClick={() => dispatch({type: "TOGGLE_PRESENT_VALUE", payload: item.id})}>
								Accidentally added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentList;
