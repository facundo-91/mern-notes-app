import Todo from "./Todo";
import TodosLeftStatus from "./TodosLeftStatus";

const TodosContainer = ({ todos, deleteTodo, deleteCompletedTodos, editTodo }) => {
	return (
		<main>
			{todos.map(todo => <Todo todoInfo={todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />)}
			<TodosLeftStatus todos={todos} removeCompletedTodos={deleteCompletedTodos} />
		</main>
	)
}

export default TodosContainer;