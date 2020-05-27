import React, { useContext } from 'react';
import { CalculatorContext } from './Main';

function Mul() {
	const calculatorContext = useContext(CalculatorContext);
	const value = calculatorContext.value;
	const dispatchAction = calculatorContext.action;
	return (
		<React.Fragment>
			<button onClick={() => dispatchAction({ type: 'mul', value })}>
				Multi</button>
		</React.Fragment>
	);
}

export default Mul;