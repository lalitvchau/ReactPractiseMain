import React, { useContext } from 'react';
import { CalculatorContext } from './Main';

function Mod() {
	const calculatorContext = useContext(CalculatorContext);
	const value = calculatorContext.value;
	const dispatchAction = calculatorContext.action;
	return (
		<React.Fragment>
			<button onClick={() => dispatchAction({ type: 'mod', value })}>
				Modulus</button>
		</React.Fragment>
	);
}

export default Mod;