import Nav from '../components/Nav';
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
    const { counter, increaseHandler, decreaseHandler } = useCounter()
    return (
        <div>
            <Nav />
            <p>The value of the counter is {counter}</p>
            <button onClick={increaseHandler}>Increase By 1</button>
            <button onClick={decreaseHandler}>Decrease By 1</button>
        </div>
    )
}

export default Counter