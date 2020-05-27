import React, { useContext } from 'react';
import { CalculatorContext } from './Main';

function Div() {
	const calculatorContext = useContext(CalculatorContext);
	const value = calculatorContext.value;
	const dispatchAction = calculatorContext.action;
	return (
		<React.Fragment>
			<button onClick={() => dispatchAction({ type: 'div', value })}>
				Division</button>
		</React.Fragment>
	);
}

export default Div;