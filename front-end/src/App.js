import { useEffect, useState } from 'react'
import todoService from './services/todos'
import './App.css';
import Header from './components/Header';
import TodosContainer from './components/TodosContainer';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		todoService
			.getAll()
			.then(initialTodos => {
				setTodos(initialTodos)
			})
	}, []);

	const addTodo = (todoObject) => {
		todoService
			.create(todoObject)
			.then(returnedTodo => {
				setTodos(todos.concat(returnedTodo))
			})
	}

	const removeTodo = id => {
		todoService.remove(id)
		const newTodos = [...todos].filter(todo => todo.id !== id);
		setTodos(newTodos)
	}

	return (
		<div className="App">
			<Header createTodo={addTodo} />
			<TodosContainer todos={todos} deleteTodo={removeTodo} />
		</div>
	);
}

export default App;
