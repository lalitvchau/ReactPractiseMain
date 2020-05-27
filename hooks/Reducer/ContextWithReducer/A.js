import React from 'react';
import Sub from './Sub';
import Sum from './Sum';

function A(props) {
	return (
		<React.Fragment>
			<Sum />
			<Sub />
		</React.Fragment>
	);
}

export default A;