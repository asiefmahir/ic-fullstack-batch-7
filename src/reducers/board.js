export const boardReducer = (boards = [], action) => {
    switch (action.type) {
        case 'CREATE_BOARD': {
            const newBoard = {
                id: Date.now() + '',
                title: action.payload,
                lists: [],
                tasks: []
            };

            return [...boards, newBoard]
        }
        case 'UPDATE_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, title: action.payload.title}
                }
                return item
            })
        }

        case 'REMOVE_BOARD' : {
            return boards.filter(item => item.id !== action.payload)
        }

        case 'ADD_LIST_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, lists: [...item.lists, action.payload.listId]}
                }
                return item
            })
        }

        case 'REMOVE_LIST_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, lists: item.lists.filter(listId => listId !== action.payload.listId)}
                }

                return item
            })
        }

        case 'ADD_TASK_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, tasks: [...item.tasks, action.payload.taskId]}
                }
                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, tasks: item.tasks.filter(taskId => taskId !== action.payload.taskId)}
                }

                return item
            })
        }
        default: {
            return boards
        }
    }
}