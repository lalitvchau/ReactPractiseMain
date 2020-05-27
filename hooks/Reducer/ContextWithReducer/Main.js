import React, { useReducer, useState, useEffect } from 'react';
import A from './A';
import B from './B';
import C from './C';

export const CalculatorContext = React.createContext();

const initState = 0;
const calculatorReducer = (state, action) => {
	switch (action.type) {
		case 'sum':
			return state + action.value;
		case 'sub': return state - action.value;
		case 'mul': return state * action.value;
		case 'div': return action.value > 0 ? state / action.value : state;
		case 'mod': return action.value > 0 ? state % action.value : state;
		default: return state;
	}
};

function Main() {
	const [calculationState, dispatchCalculation] = useReducer(calculatorReducer, initState);
	const [value, setValue] = useState(calculationState);

	useEffect(() => {
		setValue(calculationState);
	}, [calculationState]);

	return (
		<CalculatorContext.Provider value={{ action: dispatchCalculation, value: value }}>
			<div>
				<input
					type="number"
					value={value}
					onChange={(evt) => setValue(evt.target.value)}
				/>
				<A />
				<B />
				<C />
			</div>
		</CalculatorContext.Provider >
	);
}

export default Main;