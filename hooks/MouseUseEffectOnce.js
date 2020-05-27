import React, { useEffect, useState } from 'react';


function MouseUseEffectOnce() {

	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMouseEvent = e => {
		setX(e.clientX);
		setY(e.clientY);
	}

 useEffect(() => {
	 window.addEventListener("mousemove", logMouseEvent);
	 
	 return (evt => {
		 window.removeEventListener("mousemove", logMouseEvent);
	 });
	},[]);

	return (
		<div>
			X - {x} & Y - {y}
		</div>
	);
}

export default MouseUseEffectOnce;