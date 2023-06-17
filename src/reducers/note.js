export const noteReducer = (currentState, action) => {
	switch (action.type) {
		case 'CHANGE_TITLE': {
			return {
				...currentState,
				noteTitle: action.payload
			}
		}

		case 'CREATE_NOTE' : {
			const newNote = {
				id: Date.now(),
				title: currentState.noteTitle
			}

			return {
				...currentState,
				notes: [...currentState.notes, newNote],
				noteTitle: ''
			}
		}

		case 'EDIT_NOTE' : {
			const toBeUpdatedNote = currentState.notes.find(item => item.id === action.payload);

			return {
				...currentState,
				editMode: true,
				noteTitle: toBeUpdatedNote.title,
				editableNote: toBeUpdatedNote
			}
		}

		case 'UPDATE_NOTE' : {
			return {
				...currentState,
				notes: currentState.notes.map(item => {
					if (item.id === currentState.editableNote.id) {
						item.title = currentState.noteTitle
					}

					return item
				}),
				editMode: false,
				editableNote: null,
				noteTitle: ''
			}
		}

		case 'REMOVE_NOTE' : {
			return {
				...currentState,
				notes: currentState.notes.filter(item => item.id !== action.payload)
			}
		}
		default: {
			return currentState
		}
	}
}