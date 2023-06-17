export const counterReducer = (currentState, action) => { // action === 'increase_counter'
	console.log(action);
	switch (action.type) {
		case 'increase_counter': {
			return currentState + action.payload // 100 + 1 = 101
		}

		case 'decrease_counter' : {
			console.log(currentState);
			return currentState - action.payload
		}

	
		default: {
			return currentState
		}
	}
}
