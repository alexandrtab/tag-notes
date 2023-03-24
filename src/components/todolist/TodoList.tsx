import { TodoListItem } from "../todolistitem/TodoListItem";

interface TodoListProps {
	todos: Array<Todo>;
	toggleComplete: ToggleComplete;
	onRemoveTodo: RemoveTodo;
	editTodo: EditTodo;
	submitTodo: SubmitTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	toggleComplete,
	onRemoveTodo,
	editTodo,
	submitTodo
}) => {
	return (
		<ul className="todo-list">
			{todos.map((todo) => (
				<TodoListItem
					key={todo.text}
					todo={todo}
					toggleComplete={toggleComplete}
					onRemoveTodo={onRemoveTodo}
					editTodo={editTodo}
					submitTodo={submitTodo}
				/>
			))}
		</ul>
	);
};
