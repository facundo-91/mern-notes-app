import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
	const [notes, setNotes] = useState(null);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		setIsFetching(true)
		axios
			.get('/api/notes')
			.then(response => setNotes(response.data))
		setIsFetching(false)
	}, []);

	return (
		<div className="App">
			<h1>Notes</h1>
			<p>
				{isFetching
					? 'Fetching message from API'
					: notes.map(m => m.content)}
			</p>
		</div>
	);
}

export default App;
