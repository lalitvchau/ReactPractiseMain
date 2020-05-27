import React, { useState } from 'react';

function WillUnMount(props) {
	const [country, setCountry] = useState(props.value);

	useState(() => {
		setCountry(props.value);
	}, [props.value]);
	return (
		<div>
			{country}
			<input value={country} onChange={e=> setCountry(e.target.value)}></input>
		</div>
	);
}

export default WillUnMount;