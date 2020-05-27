import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ConditionEffectHook.propTypes = {

};

function ConditionEffectHook(props) {

	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count = ${count}`;
	}, []);

	useEffect(() => {
		document.title = `Updated Count = ${count}`
	}, [count]);

	return (
		<div>
			<button onClick={evt => setCount(count + 1)}> counter {count}</button>
		</div>
	)
}

export default ConditionEffectHook;