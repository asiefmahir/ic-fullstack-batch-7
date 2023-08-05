import { useQuery } from "@tanstack/react-query"
export const useFetchPostsQuery = () => {
    const {isFetching, isError, error, data: posts} = useQuery({
        queryKey: ['posts'],
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        queryFn: () => (
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`).then(res => res.json())
        )
    })

    return {
        isFetching,
        isError,
        error,
        posts
    }
}