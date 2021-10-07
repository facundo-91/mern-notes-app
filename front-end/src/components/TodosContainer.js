import Todo from "./Todo";

const TodosContainer = ({ todos, deleteTodo, editTodo }) => {
	return (
		<main>
			{todos.map(todo => <Todo todoInfo={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />)}
		</main>
	)
}

export default TodosContainer;