import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function IntervalCounter() {

	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(prevCount => prevCount + 1);
	}

	// useEffect(() => {
	// 	setInterval(tick, 1000);
	// }, [count]);

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return (() => {
			clearInterval(interval);
		})
	}, []);


	return (
		<div>
			Time {count}
		</div>
	);
}

export default IntervalCounter;