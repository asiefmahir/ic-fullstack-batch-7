import { createContext, useReducer } from "react";
import { studentReducer } from "../reducers/student";

const initState = {
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
	const [studentStates, dispatch] = useReducer(studentReducer, initState);

	const contextValues = {
		studentStates,
		dispatch
	};
	return (
		<StudentContext.Provider value={contextValues}>
			{children}
		</StudentContext.Provider>
	);
};

export default StudentProvider;
