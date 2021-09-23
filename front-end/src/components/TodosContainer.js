import Todo from "./Todo";

const TodosContainer = ({ todos }) => {
	return (
		<main>
			{todos.map(todo => <Todo todoInfo={todo} />)}
		</main>
	)
}

export default TodosContainer;