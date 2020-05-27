import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function UseEffectEveryTimeUpdateHook(props) {

	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count = ${count}`; 
	});

	return (
		<div>
			<button onClick={evt => setCount(count + 1)}> counter {count}</button>
		</div>
	);
}

UseEffectEveryTimeUpdateHook.propTypes = {

};

export default UseEffectEveryTimeUpdateHook;