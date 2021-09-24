import Todo from "./Todo";

const TodosContainer = ({ todos, deleteTodo }) => {
	return (
		<main>
			{todos.map(todo => <Todo todoInfo={todo} key={todo.id} deleteTodo={deleteTodo} />)}
		</main>
	)
}

export default TodosContainer;