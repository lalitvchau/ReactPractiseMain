import React, { useState } from 'react';

function UseStateArray() {

	const [schools, setSchools] = useState([]);

	const addSchool = () => {
		setSchools([...schools, {
			id: schools.length,
			value: `School ${schools.length}`
		}]);
	}
	return (
		<div>
			<ul>
				{
					schools.map(school => (
						<li key={school.id}>{school.value}</li>
					))
				}
			</ul>
			<button onClick={evt => addSchool()}>Add itme to array </button>			
		</div>
	);
}

export default UseStateArray;