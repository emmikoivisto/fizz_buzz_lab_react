import './App.css';
import { useState, useEffect } from 'react'

function App() {

	const [number, setNumber] = useState(0);
	const [result, setResult] = useState("");

	const increaseNumber = () => {
		setNumber(number + 1)
	}

	const decreaseNumber = () => {
		if (number > 0) {
			setNumber(number - 1)
		}
	}

	useEffect(() => {
		// if number is divisible by 3 output FIZZ
		// else if number is divisible by 5 output BUZZ
		// else if number is divisible by 3 and 5 output FIZZBUZZ
		// else output number 

		if (number === 0) {
			setResult("Start the game.")
		} else if (number % 3 === 0 && number % 5 === 0) {
			setResult("FIZZBUZZ")
		} else if (number % 3 === 0) {
			setResult("FIZZ")
		} else if (number % 5 === 0) {
			setResult("BUZZ")
		} else {
			setResult(number.toString())
		}
	}, [number])


	return (
		<div className="App">
			<h1>FizzBuzz Game</h1>
			<p>{number}</p>
			<button onClick={increaseNumber}> + </button>
			<button onClick={decreaseNumber}> - </button>
			<p>Result: {result}</p>
		</div>
	);
}

export default App;
