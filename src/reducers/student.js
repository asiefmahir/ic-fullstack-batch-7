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

		case "UPDATE_STUDENT_PROPERTY" : {
			return {
				...currentState,
				students: currentState.students.map(item => {
					if (item.id === action.payload.id) {
						item[action.payload.propertyName] = action.payload.value
						// item['name'] === item.name = "student updated"
					}

					return item
				}),
				editMode: action.payload.propertyName === 'name' ? false : currentState.editMode,
				editableStudent: action.payload.propertyName === 'name' ? null : currentState.editableStudent,
				studentName: action.payload.propertyName === 'name' ? '' : currentState.studentName
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