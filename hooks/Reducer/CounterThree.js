import React, { useReducer } from 'react';

const counterInitValue = 0;

const counterReducer = (state, action) => {
	switch (action) {
		case 'increment': return state + 1;
		case 'decrement': return state - 1;
		case 'reset': return counterInitValue;
		default: return state;
	}
}

function CounterThree() {

	const [count, dispatchCount] = useReducer(counterReducer, counterInitValue);
	const [count2, dispatchCount2] = useReducer(counterReducer, counterInitValue);
	return (
		<div>
			<div>
				Reducer counter {count}
				<button onClick={() => dispatchCount('increment')}>Increment</button>
				<button onClick={() => dispatchCount('decrement')}>Decrement</button>
				<button onClick={() => dispatchCount('reset')}>Reset</button>
			</div>
			<div>
				Reducer counter 2 {count2}
				<button onClick={() => dispatchCount2('increment')}>Increment</button>
				<button onClick={() => dispatchCount2('decrement')}>Decrement</button>
				<button onClick={() => dispatchCount2('reset')}>Reset</button>
			</div>
		</div>
	);
}

export default CounterThree;