import "./App.css";
import { useState } from "react";

const App = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
  /**
   * note = {id: "1", title: "note 1", isCompleted: false}
   */
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

	const createNoteHandler = (e) => {
		e.preventDefault();
		if (!noteTitle) {
			return alert(`Please provide a valid note title`);
		}

		const newNote = {
			id: Date.now(),
			title: noteTitle,
		};

		setNotes([...notes, newNote]); //
		setNoteTitle("");
	};

	const removeNoteHandler = (id) => {
		// "2"
		const updatedNotes = notes.filter((item) => item.id !== id);
		//                                (item => "5" !== "2")
		//                                (item => "2" !== "2")

		setNotes(updatedNotes);
	};

  const editHandler = (id) => {
      const toBeUpdatedNote = notes.find(item => item.id === id);
      setEditMode(true);
      setEditableNote(toBeUpdatedNote);
      setNoteTitle(toBeUpdatedNote.title)
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      return alert(`Please provide a valid note title`)
    }

    const updatedNotesArray = notes.map((item) => {
        if (item.id === editableNote.id) {
          item.title = noteTitle
        }

        return item  
    });

    setNotes(updatedNotesArray);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle('')

  }

	return (
		<div className="App">
			<form onSubmit={editMode ? updateHandler : createNoteHandler}>
				<input
					value={noteTitle}
					onChange={(event) => setNoteTitle(event.target.value)}
					type="text"
				/>
				<button type="submit">{editMode ? 'Update Note' :  'Add Note'}</button>
			</form>
			<ul>
				{notes.map((item) => (
					<li key={item.id}>
						<span>{item.title}</span>
						<button onClick={() => editHandler(item.id)}>Edit</button>
						<button onClick={() => removeNoteHandler(item.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

/**
 * note = {id: "1", title: "note-1"}
 */
export default App;

// import {useState} from 'react'

// export const App = () => {
//   console.log("I am being invoked");

//   // let count = 0
//   // state
//   const [counter, setCounter] = useState(0); // counter 1
//   const [counter2, setCounter2] = useState(100)

//   const increaseHandler = (payload) => {
//       setCounter(counter + payload) // 1 + 1 = 2

//       // counter = 2;

//       // counter++;
//       console.log(counter, 'from increaseHandler');
//   };

//   const decreaseHandler = (payload) => {
//     // counter--;
//     setCounter(counter - payload) //
//     console.log(counter, 'from decreaseHandler');
//   }
//   return (
//     <div className="App">
//       <h2>
//         The value of the counter is {counter}
//       </h2>
//       <button onClick={() => increaseHandler(1)}>Increase By 1</button>
//       <button onClick={() => increaseHandler(10)}>Increase By 10</button>

//       <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
//       <button onClick={() => decreaseHandler(5)}>Decrease By 5</button>
//       <h2>The value of counter2 is {counter2}</h2>
//       <button onClick={() => setCounter2(counter2 + 1)}>Increase Counter2 By 1</button>

//     </div>
//   )
// }

/**
 * If any of the states change in a component, the component function will rerun on its run
 * If any of the props change in a component, the component function will rerun on its run
 */

// function add (a, b) {
//   return a + b
// }

// add (10, 20)
// add(30, 20)
// export {};
