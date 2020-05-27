import React, { useState } from 'react';

function UseStateObject() {
	const [name, setName] = useState({ firstName: '', lastName: '' });
	return (
		<div>
			Your name : - first name : {name.firstName} last name : {name.lastName}
			object {JSON.stringify(name)}
			<form>
				first name :
				<input
					value={name.firstName
					}
					onChange={evt => { setName({ ...name, firstName: evt.target.value }})}
					}
				/>
				last name :
				<input
					value={name.lastName}
					onChange={evt => { setName({ ...name, lastName: evt.target.value }) }}
				/>
			</form>
		</div >
	);
}

export default UseStateObject;