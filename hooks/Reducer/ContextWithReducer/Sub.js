import React, { useContext } from 'react';
import { CalculatorContext } from './Main';

function Sub() {
	const calculatorContext = useContext(CalculatorContext);
	const value = calculatorContext.value;
	const dispatchAction = calculatorContext.action;
	return (
		<React.Fragment>
			<button onClick={() => dispatchAction({ type: 'sub', value })}>
				Subtract</button>
		</React.Fragment>
	);
}

export default Sub;