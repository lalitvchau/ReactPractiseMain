import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataFetchWithUseState(props) {
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		Axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
			res => {
				setLoading(false);
				setPost(res.data);
			}
		).catch(res => {
			setLoading(false);
			setPost({});
			setError('Something went wrong !');
		});
	}, []);

	return (
		<div>
			{loading ? ' Loading' : post.title}
			{error}
		</div>
	);
}

export default DataFetchWithUseState;