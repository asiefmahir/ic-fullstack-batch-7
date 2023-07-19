import "./App.css";
import {useSelector, useDispatch} from 'react-redux'
import {counterDecrease, counterIncrease} from './store/actions/counter'
import { changeBgColor, changeFontColor, resetTheme } from "./store/actions/theme";


const App = () => {
	const counter = useSelector((store) => store.counter);
	const theme = useSelector((store) => store.theme);
	
	const dispatch = useDispatch()
	console.log(counter);
	return (
		<div className="App">
			<div className="theme">
				<div className="bg-btn-group">
					<button onClick={() => dispatch(changeBgColor('green'))}>Change Bg Color to Green</button>
					<button onClick={() => dispatch(changeBgColor('purple'))}>Change Bg Color to Purple</button>
					<button onClick={() => dispatch(changeBgColor('blue'))}>Change Bg Color to Blue</button>
				</div>

				<div className="text-btn-group">
					<button onClick={() => dispatch(changeFontColor('red'))}>Change Font Color to Red</button>
					<button onClick={() => dispatch(changeFontColor('yellow'))}>Change Font Color to Yellow</button>
					<button onClick={() => dispatch(changeFontColor('magenta'))}>Change Font Color to Magenta</button>
				</div>
				<div className="reset">
					<button onClick={() => dispatch(resetTheme())}>Reset Theme</button>
				</div>
			</div>
			<div style={{backgroundColor: theme.bgColor, color: theme.color}} className="counter-app">
				<p>The value of the counter is {counter}</p>
				<button onClick={() => dispatch(counterIncrease(1))}>Increase By 1</button>
				<button onClick={() => dispatch(counterIncrease(10))}>Increase By 10</button>
				<button onClick={() => dispatch(counterDecrease(2))}>Decrease By 2</button>
				<button onClick={() => dispatch(counterDecrease(5))}>Decrease By 5</button>
			</div>
		</div>
	)
};
export default App;
