import "./App.css";
// import StudentForm from "./components/StudentForm";
// import StudentSection from "./components/StudentSection";
// import { useState, useReducer } from "react";
import { useState, useEffect } from "react";

const App = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
	const [notes, setNotes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const getAllNotes = () => {
		fetch("http://localhost:4000/notes")
			.then((res) => {
				setIsLoading(true);
				return res.json();
			})
			.then((result) => {
				setIsLoading(false);
				setNotes(result);
				setErrorMessage("");
			})
			.catch((err) => {
				setIsLoading(false);
				setErrorMessage(err.message);
				setNotes([]);
			});
	};

	const createHandler = () => {
		if (!noteTitle) {
			return alert(`Please provide a valid title`);
		}

		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		fetch(`http://localhost:4000/notes`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(newNote),
		}).then(() => {
			getAllNotes();
			setNoteTitle('')
		});
	};

	const removeHandler = (id) => {
		fetch(`http://localhost:4000/notes/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				getAllNotes()
			})
	}

	const editHandler = (id) => {
		const toBeUpdatedNote = notes.find(item => item.id === id);
		setEditMode(true);
		setEditableNote(toBeUpdatedNote);
		setNoteTitle(toBeUpdatedNote.title)
	}


	const updateHandler = () => {
		if (!noteTitle) {
			return alert(`Please provide a valid title`);
		}

		fetch(`http://localhost:4000/notes/${editableNote.id}`, {
			method: "PUT",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({id: editableNote.id, title: noteTitle})
		})
			.then(() => {
				getAllNotes();
				setNoteTitle('');
				setEditMode(false);
				setEditableNote(null)
			})
	}

	useEffect(() => {
		console.log("I am being called");
		getAllNotes()
	}, []);

	console.log("App rerendering");

	return (
		<div className="App">
			<h2>API Calling in React</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					editMode ? updateHandler() :  createHandler()
				}}
			>
				<input
					type="text"
					value={noteTitle}
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
				<button type="submit">
					{editMode ? "Update Note" : "Create Note"}
				</button>
			</form>
			{isLoading && <div>Loading/......</div>}
			{errorMessage && <h2>{errorMessage}</h2>}
			<ul>
				{notes.map((item) => (
					<li key={item.id}>
						<span>{item.title}</span>
						<button onClick={() => editHandler(item.id)}>Edit</button>
						<button onClick={() => removeHandler(item.id)}>Remove</button>
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
