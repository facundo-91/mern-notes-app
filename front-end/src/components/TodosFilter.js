const TodosFilter = ({ todosFilter, setTodosFilter, container }) => {
	return (
		<div className={`filters ${container}`}>
			<button onClick={() => setTodosFilter('All')} className={`filter-button ${todosFilter === 'All' ? 'active' : ''}`}>All</button>
			<button onClick={() => setTodosFilter('Active')} className={`filter-button ${todosFilter === 'Active' ? 'active' : ''}`}>Active</button>
			<button onClick={() => setTodosFilter('Completed')} className={`filter-button ${todosFilter === 'Completed' ? 'active' : ''}`}>Completed</button>
		</div>
	)
}

export default TodosFilter;