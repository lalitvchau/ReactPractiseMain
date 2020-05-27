import React, { useReducer } from 'react';

const initCount = {
	count: 0,
	countByOne: 0,
	countByFive: 5,
}

const counterReducer = (state, action) => {
	if (action.counterType === 'counterByFive') {
		switch (action.reducerType) {
			case 'increment': return { ...state, countByFive: state.countByFive + 5 };
			case 'decrement': return { ...state, countByFive: state.countByFive - 5 }
			default: return state;
		}
	} else if (action.counterType === 'counterByOne') {
		switch (action.reducerType) {
			case 'increment': return { ...state, counterByOne: state.counterByOne + 1 }
			case 'decrement': return { ...state, counterByOne: state.counterByOne - 1 }
			default: return state;
		}
	} else {
		switch (action.reducerType) {
			case 'increment': return { ...state, count: state.count + action.value }
			case 'decrement': return { ...state, count: state.count - action.value }
			case 'reset': return { initCount }
			default: return state;
		}
	}
};

function Counter2() {

	const [count, dispatchCount] = useReducer(counterReducer, initCount);
	return (
		<div>
			<div>
				Reducer counter by five {count.countByFive}
				<button onClick={() => dispatchCount({ reducerType: 'increment', counterType: 'counterByFive' })}>Increment</button>
				<button onClick={() => dispatchCount({ reducerType: 'decrement', counterType: 'counterByFive' })}>Decrement</button>
				<button onClick={() => dispatchCount({ reducerType: 'reset' })}>Reset</button>
			</div >
			<div>
				Reducer counter by One {count.countByOne}
				<button onClick={() => dispatchCount({ reducerType: 'increment', counterType: 'countByOne' })}>Increment</button>
				<button onClick={() => dispatchCount({ reducerType: 'decrement', counterType: 'countByOne' })}>Decrement</button>
				<button onClick={() => dispatchCount({ reducerType: 'reset' })}>Reset</button>
			</div >
			<div>
				Reducer counter custom {count.count}
				<button onClick={() => dispatchCount({ reducerType: 'increment', value: 10 })}>Increment</button>
				<button onClick={() => dispatchCount({ reducerType: 'decrement', value: 10 })}>Decrement</button>
				<button onClick={() => dispatchCount({ reducerType: 'reset' })}>Reset</button>
			</div >
		</div >
	);
}

export default Counter2;