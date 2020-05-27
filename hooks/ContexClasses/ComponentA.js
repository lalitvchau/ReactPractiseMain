import React from 'react';
import PropTypes from 'prop-types';
import B from './B';


export const UserContext = React.createContext();
export const CityContext = React.createContext();

function ComponentA() {
	return (
		<UserContext.Provider value={"LaLit Kumar"}>
			<CityContext.Provider value={"Bengaluru"}>
				<B></B>
			</CityContext.Provider>
		</UserContext.Provider >
	);
}

export default ComponentA;