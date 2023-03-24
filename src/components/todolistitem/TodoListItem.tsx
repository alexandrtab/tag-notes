import { useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";

interface TodoListItemProps {
	todo: Todo;
	toggleComplete: ToggleComplete;
	onRemoveTodo: RemoveTodo;
	editTodo: EditTodo;
	submitTodo: SubmitTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
	todo,
	toggleComplete,
	onRemoveTodo,
	editTodo,
	submitTodo
}) => {
	const [isEditOn, setIsEditOn] = useState<boolean>(false);
	const [inputText, setInputText] = useState<string>(todo.text);

	const onDelete = () => {
		onRemoveTodo(todo);
	};

	const onEdit = () => {
		setIsEditOn(true);
	};

	const onTodoUpdate = (e: any) => {
		let text = e.target.value;
		setInputText(text);
		editTodo(text);
	};
	const onTodoSubmit = (e: any) => {
		e.preventDefault();
		submitTodo(inputText);
	};
	const dropdownOptions: Array<Option> = [
		{
			value: "Delete",
			onClick: onDelete,
			color: "red",
		},
		{
			value: "Edit",
			onClick: onEdit,
			color: "blue",
		},
	];
	return (
		<li className={todo.complete ? "todo-row completed" : "todo-row"}>
			<label className="todo-label">
				<input
					type="checkbox"
					onChange={() => toggleComplete(todo)}
					checked={todo.complete}
				/>
				{isEditOn ? (
					<form onSubmit={(e) => onTodoSubmit(e)}>
						<input
							className="edit-input"
							type="text"
							value={inputText}
							onChange={(e) => onTodoUpdate(e)}
						/>
					</form>
				) : (
					todo.text
				)}
			</label>
			<Dropdown options={dropdownOptions} />
		</li>
	);
};
