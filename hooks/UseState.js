import React, { useState } from 'react';
import useStateArray from './useStateArray';
//import UseStateObject from './UseStateObject';

export function UseStateHook(props) {
	const initValue = 0;
	const [counter, setCounter] = useState(initValue);

	const incBy10 = () => {
		//	alert('counter')
		for (let i = 0; i < 10; i++) {
			setCounter(prevCOunter => prevCOunter + 1)
			//setCounter(counter + 1)
		}
	}

	return (
		<div>
			conter = {counter}

			{/* <useStateArray /> */}
			<button onClick={(evt) => setCounter(preCounter => counter + 1)}>Increament</button>
			<button onClick={(evt) => setCounter(preCounter => counter - 1)}>Dec</button>
			<button onClick={(evt) => setCounter(initValue)}>Init Vallue</button>
			<button onClick={(evt) => setCounter(counter + 5)}>Increament by 5</button>
			<button onClick={(evt) => incBy10()}>Increament by 10</button>
			{/* <UseStateObject/> */}
		</div>
	);
}



/* export class ReactStateClass extends Component {
	constructor(props) {
		super(props);

		counter: 0;
	}

  increament = () =>{
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		return (
			<div>
				<button onClick={(evt) => this.increament}>Counter = {this.state.counter}</button>
			</div >
		);
	}
} */