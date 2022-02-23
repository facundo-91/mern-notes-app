import { useEffect, useState } from "react";

const Header = ({ todos, createTodo, completeTodos }) => {
	const [newTodo, setNewTodo] = useState('')
	const [checkbox, setCheckbox] = useState(false)
	const [isDark, setIsDark] = useState(false);

	const handleChange = (event) => {
		setNewTodo(event.target.value)
	}

	const handleCheckbox = event => {
		setCheckbox(event.target.checked)
		completeTodos(!checkbox)
	}

	const addTodo = (event) => {
		event.preventDefault()
		createTodo({
			content: newTodo,
		})
		setNewTodo('')
	}

	useEffect(() => {
		todos.some(todo => todo.completed === false) ? setCheckbox(false) : setCheckbox(true)
	}, [todos])

	useEffect(() => {
		isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	}, [isDark]);

	return (
		<header>
			<div className='header-row-darkmode'>
				<h1>TODO</h1>
				<button onClick={() => setIsDark(!isDark)}>
					<span className='darkmode-icon'></span>
				</button>
			</div>
			<div className='header-row-input'>
				<span className='complete-all-checkbox-container'>
					<input type='checkbox' id='all-todos' checked={checkbox} onChange={handleCheckbox}></input>
					<label htmlFor='all-todos'></label>
				</span>
				<form onSubmit={addTodo} className='new-todo-form'>
					<input required autoFocus minLength='5' className='new-todo-input' type='text' placeholder='Create a new todo...' value={newTodo} onChange={handleChange}></input>
				</form>
			</div>
		</header>
	)
}

export default Header