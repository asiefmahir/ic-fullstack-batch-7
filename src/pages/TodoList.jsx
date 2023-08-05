import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Nav from '../components/Nav';


const TodoList = () => {
    const client = useQueryClient()
    const {isLoading, isError, error, data: todos} = useQuery({
        queryKey: ['Todos'],
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        queryFn: async () => {
            const response = await fetch(`http://localhost:4000/todos`);
            const data = await response.json();
            return data
        }
    })

    const removeMutaion =  useMutation({
        mutationFn: async (todoId) => {
            return await fetch(`http://localhost:4000/todos/${todoId}`, {
                method: 'DELETE'
            })
        },
        onMutate: (todoId) => {
            const previousData = client.getQueryData(['Todos']);
            client.setQueryData(['Todos'], (old) => old.filter(item => item.id !== todoId));

            return {previousData}
        },
        onError: (_err, _todoId, context) => {
            client.setQueryData(['Todos', context.previousData ])
        },
        onSuccess: () => {
            client.invalidateQueries(['Todos'])
        }
    })
  

  return (
    <div>
        <Nav />
        <h2>All Post</h2>
        {isLoading && <h2>Loading.....</h2>}
        {isError &&  <h2>{error.message}</h2>}
        <ul>
            {todos?.map(item => (
                <li key = {item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => removeMutaion.mutate(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList