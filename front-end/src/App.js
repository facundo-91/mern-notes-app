import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
	const [notes, setNotes] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const fetchNotes = async () => {
			setIsFetching(true)
			const notes = await axios('/api/notes')
			setNotes(notes.data)
			setIsFetching(false)
		}
		fetchNotes()
	}, []);

	return (
		<div className="App">
			<header>
				<div className='header-row-darkmode'>
					<h1>TODO</h1>
					<button>
						<span className='darkmode-icon'></span>
					</button>
				</div>
				<div className='header-row-input'>
					<span className='checkbox-container'>
						<input type='checkbox'></input>
					</span>
					<input className='new-note-input' type='text' placeholder='Create a new note...'></input>
				</div>
			</header>
			<main>
				{isFetching
					? 'Fetching message from API'
					: (
						<div>
							{notes.map(m => <div><p>{m.content}</p></div>)}
						</div>)}
			</main>

		</div>
	);
}

export default App;
