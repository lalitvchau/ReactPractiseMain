import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';

const initObject = {
	post: {},
	error: '',
	loading: true,
};

const reducer = (state, action) => {
	const type = action.type;
	switch (type) {
		case 'FETCH_DATA_SUCCESS': return {
			post: action.payload,
			error: '',
			loading: false,
		};
		case 'FETCH_DATA_ERROR': return {
			post: {},
			error: 'Something went wrong',
			loading: false,
		};
		default: return state;
	}
}

function DataFetchReduce(props) {
	const [postData, dispatch] = useReducer(reducer, initObject);
	useEffect(() => {
		Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
			res => {
				dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res.data });
			}
		).catch(res => {
			dispatch({ type: 'FETCH_DATA_ERROR' });
		});
	}, []);
	return (
		<div>
			{postData.loading ? ' Loading' : postData.post.title}
			{postData.error}
		</div>
	);
}

export default DataFetchReduce;