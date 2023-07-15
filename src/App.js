import "./App.css";
import { useState, useCallback, useMemo } from "react";
import Title from "./components/Title";
import CounterApp from "./components/CounterApp";
import Button from "./components/Button";

const App = () => {
	console.log('App is rendered');
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(5);

	//Date Type -> Reference Type Data -> i) Array, ii) Object iii) Function

	const increaseCounterHandler = useCallback(() => { // 00ff88
		setCounter1(prev => prev + 1)
	}, [])

	// [] === []

	// Stack Memory -> Heap Memory => fff005 -> [] 0005544 -> []
	
	const increaseCounter2Handler = useCallback(() => { // ff0044 // 66FF00
		setCounter2((prev) => prev + 5)
	}, []);


	const isEven = useMemo(() =>{
		let i = 0;
		while (i < 1000000000) {
			i++
		}
		return counter1 % 2 === 0
	}, [counter1])
 	return (
		<div className="App">
			<Title />
			<CounterApp counterValue={counter1}/>
			<Button increaseHandler={increaseCounterHandler}/>
			<p>
				{isEven === true ? `Counter1 is Even` : `Counter1 is Odd`}
			</p>
			<hr />
			<CounterApp counterValue={counter2}/>
			<Button increaseHandler={increaseCounter2Handler}/>
		</div>
	)
};
export default App;
