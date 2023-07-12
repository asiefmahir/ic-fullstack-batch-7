export const listReducer = (lists = [], action) => {
    switch (action.type) {
        case 'CREATE_LIST': {
            const newList = {
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                tasks: []
            };

            return [...lists, newList]
        }

        case 'UPDATE_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    // item.title = action.payload.title
                    return {...item, title: action.payload.title}
                }

                return item
            })
        }

        case 'REMOVE_LIST' : {
            return lists.filter(item => item.id !== action.payload)
        }

        case 'CHANGE_BOARD_ID' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    // item.title = action.payload.title
                    return {...item, boardId: action.payload.boardId}
                }

                return item
            })
        }

        case 'SORT_TASK_IDS_IN_LIST' : {
            const {source, destination, draggableId} = action.payload;
            const previousList = lists.find(item => item.id === source.droppableId);
            const latestList = lists.find(item => item.id === destination.droppableId);

            
            previousList.tasks.splice(source.index, 1)

            latestList.tasks.splice(destination.index, 0, draggableId);

            return [...lists]
        }

        case 'ADD_TASK_ID_TO_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    // item.title = action.payload.title
                    return {...item, tasks: [...item.tasks, action.payload.taskId]}
                }

                return item
            })
        }
        
        case 'REMOVE_TASK_ID_FROM_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, tasks: item.tasks.filter(taskId => taskId !== action.payload.taskId)}
                }

                return item
            })
        }
    
        default:
            break;
    }
}