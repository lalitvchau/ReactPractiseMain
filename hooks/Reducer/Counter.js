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

function Counter() {

	const [count, dispatchCount] = useReducer(counterReducer, counterInitValue);
	return (
		<div>
			Reducer counter {count}
			<button onClick={() => dispatchCount('increment')}>Increment</button>
			<button onClick={() => dispatchCount('decrement')}>Decrement</button>
			<button onClick={() => dispatchCount('reset')}>Reset</button>
		</div>
	);
}

export default Counter;