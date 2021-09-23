import { useState } from "react";

const Header = ({ createTodo }) => {
	const [newTodo, setNewTodo] = useState('')

	const handleChange = (event) => {
		setNewTodo(event.target.value)
	}

	const addTodo = (event) => {
		event.preventDefault()
		createTodo({
			content: newTodo,
			important: false,
		})
		setNewTodo('')
	}

	return (
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
				<form onSubmit={addTodo} className='new-note-form'>
					<input className='new-note-input' type='text' placeholder='Create a new note...' value={newTodo} onChange={handleChange}></input>
				</form>
			</div>
		</header>
	)
}

export default Header