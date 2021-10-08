import { useEffect, useState } from "react"

const CompletedStatus = ({ todos, removeCompletedTodos }) => {
	const [todosLeft, setTodosLeft] = useState(0)

	useEffect(() => {
		const todosLeftArray = todos.filter(todo => todo.completed === false)
		setTodosLeft(todosLeftArray.length)
	}, [todos])


	return (
		<div className='status-container'>
			<span className='items-left'>{todosLeft} items left</span>
			<div className='filter-container'>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<button className='clear-button' onClick={() => removeCompletedTodos()}>Clear Completed</button>
		</div>
	)
}

export default CompletedStatus