import "./App.css";
// import StudentForm from "./components/StudentForm";
// import StudentSection from "./components/StudentSection";
// import { useState, useReducer } from "react";
import { useState, useEffect } from "react";

const App = () => {
	// const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState('')
	const [counter, setCounter] = useState(10);
	const [counter2, setCounter2] = useState(50);

	const increaseHandler = () => {
		setCounter(counter + 1);
	};

	const increaseHandler2 = () => {
		setCounter2(counter2 + 5);
	};

	useEffect(() => {
		console.log("I am being called");
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				setIsLoading(true)
				return res.json()
			})
			.then((result) => {
				setIsLoading(false)
				setData(result)
				setErrorMessage('')
			})
			.catch(err => {
				setIsLoading(false)
				setErrorMessage(err.message)
				setData([])
			})
	}, []);

	console.log("App rerendering");

	return (
		<div className="App">
			<h2>API Calling in React</h2>
			<p>The value of the counter is {counter}</p>
			<button onClick={increaseHandler}>Increase By 1</button>
			<p>The value of the counter2 is {counter2}</p>
			<button onClick={increaseHandler2}>Increase By 1</button>
			{isLoading && <div>Loading/......</div>}
			{errorMessage && <h2>{errorMessage}</h2>}
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

// function demo (param) {
// 	/**Some other logic */
// 	outer(param)
// }

// function outer (arg) {
// 	console.log(arg);
// }

// function main () {
// 	demo('increase_counter')
// }

export default App;
