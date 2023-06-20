import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";
import { useState, useReducer } from "react";





const App = () => {
	return (
		<div className="App">
			<StudentForm />
			<StudentSection />
		</div>
	);
};

// function demo (param) {
// 	/**Some other logic */
// 	outer(param)
// }

// function outer (arg) {
// 	console.log(arg);
// }

// function main () {
// 	demo('increase_counter')
// }

export default App;
