export const studentReducer = (currentState, action) => {
	switch (action.type) {
		case "CHANGE_STUDENT_NAME": {
			return {
				...currentState,
				studentName: action.payload
			}
		}

		case "CREATE_STUDENT": {
			const newStudent = {
				id: Date.now(),
				name: currentState.studentName,
				isPresent: undefined
			}

			return {
				...currentState,
				students: [...currentState.students, newStudent],
				studentName: ''
			}
		}

		case "EDIT_STUDENT": {
			const toBeEditedStudent = currentState.students.find(item => item.id === action.payload);

			return {
				...currentState,
				editMode: true,
				editableStudent: toBeEditedStudent,
				studentName: toBeEditedStudent.name
			}
		}

		// case "UPDATE_STUDENT_PROPERTY" : {
		// 	return {
		// 		...currentState,
		// 		students: currentState.students.map(item => {
		// 			if (item.id === action.payload.id) {
		// 				item[action.payload.property] = action.payload.propertyValue
		// 			}

		// 			return item
		// 		}),
		// 		editMode: action.payload.property === 'name' ? false : currentState.editMode,
		// 		editableStudent: action.payload.property === 'name' ? null : currentState.editableStudent,
		// 		studentName: action.payload.property === 'name' ? '' : currentState.studentName
		// 	}
		// }

		case "UPDATE_STUDENT" : {
			return {
				...currentState,
				students: currentState.students.map(item => {
					if (item.id === currentState.editableStudent.id) {
						item.name = currentState.studentName
					}

					return item
				}),
				editMode: false,
				editableStudent:  null, 
				studentName: ''
			}
		}

		case 'SEND_TO_PRESENT_LIST' : {
			return {
				...currentState,
				students: currentState.students.map(item => {
					if (item.id === action.payload) {
						item.isPresent = true
					}

					return item
				})
			}
		}

		case 'SEND_TO_ABSENT_LIST' : {
			return {
				...currentState,
				students: currentState.students.map(item => {
					if (item.id === action.payload) {
						item.isPresent = false
					}

					return item
				})
			}
		}

		case 'TOGGLE_PRESENT_VALUE' : {
			return {
				...currentState,
				students: currentState.students.map(item => {
					if (item.id === action.payload) {
						item.isPresent = !item.isPresent
					}

					return item
				})
			}
		}

		

		case "REMOVE_STUDENT": {
			return {
				...currentState,
				students: currentState.students.filter(item => item.id !== action.payload)
			}
		}

		default: {
			return currentState
		}
	}
};

// dispatchEvent({type: "something", payload: {}})