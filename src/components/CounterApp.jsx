import {memo} from 'react'
// import Button from './Button'

const CounterApp = memo(({counterValue}) => {
	console.log('CounterApp is rendered');

    return (
        <div className="counter-app">
            <p>The value of the counter App is {counterValue}</p>
            {/* <Button increaseHandler={increaseHandler}/> */}
        </div>
    )
})

export default CounterApp