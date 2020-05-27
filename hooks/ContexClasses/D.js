import React, { useContext } from 'react';
import { UserContext, CityContext } from './ComponentA';

function D() {
	const user = useContext(UserContext);
	const city = useContext(CityContext);
	return (
		<div>
			React hook User = {user} City {city}
		</div>
	);
}

export default D;