import React, { useState, useEffect } from 'react';
import WillUnMount from './WillUnMount';

function MultiHookDepedancy() {

	const [name, setName] = useState("");
	const [count, setCount] = useState(0);
	const [name1, setName1] = useState('');
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		setName1(name + count);
		// setName("");
	}, [count, name]);

	return (
		<div>
			{display &&
				<WillUnMount value={name}/>
			}
			<br />
			{name1}
			<input value={name} onChange={e => setName(e.target.value)} ></input>
			<button onClick={e => setCount(prevCount => prevCount + 1)}> Impove {count} </button>
			<button onClick={e => setDisplay(!display)}> Display </button>
		</div>
	);
}

export default MultiHookDepedancy;