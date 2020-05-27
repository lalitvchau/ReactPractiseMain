import React, { useState } from 'react';
import MouseUseEffectOnce from './MouseUseEffectOnce';

function MouseContainner() {
	const [display, setDisplay] = useState(false);
	return (
		<div>
			<button onClick={e => setDisplay(!display)}> Toggle Button</button>
			{
				display &&
				<MouseUseEffectOnce />
			}
		</div>
	);
}

export default MouseContainner;