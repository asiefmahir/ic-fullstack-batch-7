export const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'CREATE_TASK': {
            const newTask = {
                id: action.payload.id,
                title: action.payload.title,
                listId: action.payload.listId,
                boardId: action.payload.boardId
            }

            return [...tasks, newTask]
        }

        case 'UPDATE_TASK': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, title: action.payload.title}
                }
                return item
            })
        }

        case 'REMOVE_TASK': {
            return tasks.filter(item => item.id !== action.payload)
        }

        case 'CHANGE_LIST_ID': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, listId: action.payload.listId}
                }
                return item
            })
        }

        case 'CHANGE_BOARD_ID': {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, boardId: action.payload.boardId}
                }
                return item
            })
        }
    
        default: {
            return tasks
        }
    }
}