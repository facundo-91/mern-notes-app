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

	return (
		<div className="App">
			<Header createTodo={addTodo} />
			<TodosContainer todos={todos} />
		</div>
	);
}

export default App;
