import {memo} from 'react'

const Title = memo(() => {
	console.log('title is rendered');

    return (
        <h2>Our New App</h2>
    )
})

export default Title