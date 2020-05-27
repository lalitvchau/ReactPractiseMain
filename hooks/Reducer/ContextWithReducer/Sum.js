import React, { useContext } from 'react';
import { CalculatorContext } from './Main';

function Sum() {
	const calculatorContext = useContext(CalculatorContext);
	const value = calculatorContext.value;
	const dispatchAction = calculatorContext.action;
	return (
		<React.Fragment>
			<button onClick={() => dispatchAction({ type: 'sum', value })}>
				Add</button>
		</React.Fragment>
	);
}

export default Sum;