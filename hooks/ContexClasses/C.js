import React from 'react';
import PropTypes from 'prop-types';
import { UserContext, CityContext } from './ComponentA';
import D from './D';


function C(props) {
	return (
		<UserContext.Consumer>
			{
				user => {
					return (
						<CityContext.Consumer>
							{
								city => {
									return <div>Name = {user} City = {city} <D /></div>
								}
							}
						</CityContext.Consumer>
					)
				}
			}
		</UserContext.Consumer>
	);
}

export default C;