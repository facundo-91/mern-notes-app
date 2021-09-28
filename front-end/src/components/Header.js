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
				<span className='complete-all-checkbox-container'>
					<input type='checkbox' id='all-todos'></input>
					<label for='all-todos'></label>
				</span>
				<form onSubmit={addTodo} className='new-todo-form'>
					<input className='new-todo-input' type='text' placeholder='Create a new todo...' value={newTodo} onChange={handleChange}></input>
				</form>
			</div>
		</header>
	)
}

export default Header