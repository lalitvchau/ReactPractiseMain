import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataFetch() {
	const [data, setData] = useState([]);

	const [post, setPost] = useState({});
	const [value, setValue] = useState(1);
	const [counter, setCounter] = useState(1);

	const tick = () => {
		setInterval(prevCounter => prevCounter + 1);
	}

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return (() => {
			clearInterval(interval);
		})
	}, []);

	useEffect(() => {
		Axios.get('https://jsonplaceholder.typicode.com/posts').then(
			res => {
				console.log(res)
				setData(res.data);
			}
		).catch(res => {
			console.error(res);
		});
	}, []);

	useEffect(() => {
			if (counter > 0) {
				Axios.get(`https://jsonplaceholder.typicode.com/posts/${value}`).then(
					res => {
						console.log(res)
						setPost(res.data);
					}
				).catch(res => {
					console.error(res);
				});
			}
	}, [value]);


	return (
		<div>
			<input value={value} onChange={e => {
				setValue(e.target.value)
			}} />
			{post.title}
			<ol>
				{data.map(post => {
					return <li key={post.id} >{post.title}</li>
				})}
			</ol>
			<br />
			<br />
			----------------------------------------------------
		</div>
	);
}

export default DataFetch;