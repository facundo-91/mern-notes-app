import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
	const [message, setMessage] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const fetchData = () => {
			fetch('./api')
				.then(response => {
					if (!response.ok) {
						throw new Error(`status ${response.status}`);
					}
					return response.json();
				})
				.then(json => {
					setMessage(json.message);
					setIsFetching(false);
				}).catch(e => {
					setMessage(`API call failed: ${e}`);
					setIsFetching(false);
				})
		};
		setIsFetching(true);
		fetchData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					{isFetching
						? 'Fetching message from API'
						: message}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
