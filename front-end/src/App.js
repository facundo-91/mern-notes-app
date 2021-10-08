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
		setTodos(prevState => prevState.filter(todo => todo.id !== id));
	}

	const removeCompletedTodos = () => {
		todos.map(todo => (todo.completed === false) ? todo : removeTodo(todo.id))
	}

	const updateTodo = (id, todoContent, todoCompleted) => {
		const updatedTodo = {
			content: todoContent,
			completed: todoCompleted
		}
		todoService
			.update(id, updatedTodo)
			.then(returnedTodo => {
				setTodos(prevState => prevState.map(todo => (todo.id !== returnedTodo.id) ? todo : returnedTodo))
			})
	}

	const completeTodos = check => {
		todos.map(todo => updateTodo(todo.id, todo.content, check))
	}

	return (
		<div className="App">
			<Header todos={todos} createTodo={addTodo} completeTodos={completeTodos} />
			<TodosContainer todos={todos} deleteTodo={removeTodo} deleteCompletedTodos={removeCompletedTodos} editTodo={updateTodo} />
		</div>
	);
}

export default App;
