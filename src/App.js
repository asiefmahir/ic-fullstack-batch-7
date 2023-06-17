import "./App.css";
// import StudentForm from "./components/StudentForm";
// import StudentSection from "./components/StudentSection";
import { useState, useReducer } from "react";
import { noteReducer } from "./reducers/note";

const initState = {
	noteTitle: '',
	notes: [],
	editMode: false,
	editableNote: null
}



const App = () => {
	const [noteStates, dispatch] = useReducer(noteReducer, initState)
	
	return (
		<div className="App">
			<form onSubmit={(e) => {
				e.preventDefault();
				noteStates.editMode ? dispatch({type: 'UPDATE_NOTE'}) : dispatch({type: 'CREATE_NOTE'})
			}}>
				<input
					value={noteStates.noteTitle}
					onChange={(event) => dispatch({type: 'CHANGE_TITLE', payload: event.target.value})}
					type="text"
				/>
				<button type="submit">
					{noteStates.editMode ? 'Update Note' : 'Create Note'}
				</button>
			</form>
			<ul>
				{noteStates.notes.map(item => (
					<li key = {item.id}>
						<span>{item.title}</span>
						<button onClick={() => dispatch({type: 'EDIT_NOTE', payload: item.id})}>Edit</button>
						<button onClick={() => dispatch({type: 'REMOVE_NOTE', payload: item.id})}>Remove</button>
					</li>
				))}
			</ul>
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
