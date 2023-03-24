import { useState } from "react";
import { TodoForm } from "./components/todoform/TodoForm";
import { TodoList } from "./components/todolist/TodoList";
import "./App.scss";

function App() {
	const [todos, setTodos] = useState<Array<Todo>>([]);
	const [tags, setTags] = useState<string[]>([]);

	const toggleComplete: ToggleComplete = (selectedTodo) => {
		const updatedTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const addTodo: AddTodo = (newTodo) => {
		if (newTodo !== "") {
			setTodos([...todos, { text: newTodo, complete: false }]);
		}
	};

	const removeTodo: RemoveTodo = (todoToRemove) => {
		let updatedTodos: Array<Todo> = todos.filter(
			(todo) => todo.text !== todoToRemove.text
		);
		setTodos(updatedTodos);
	};

	const editTodo: EditTodo = (todoToEdit) => {
		let todoToUpdateIndex: number = todos.findIndex(
			(todo) => todo.text === todoToEdit.text
		);
	};

	const submitTodo: SubmitTodo = (todoToEdit) => {
		const currentTag = todoToEdit
			.trim()
			.split(" ")
			.filter((note: string) => note.startsWith("#"));

		setTags([...tags, ...currentTag]);
	};
	const handleDeleteTag = (id: any) => {
		const newTagsList = tags.filter((item, index) => index !== id);

		setTags(newTagsList);
	};

	return (
		<div className="todo-app">
			<header>
				<h1>Notes</h1>
			</header>
			<TodoForm addTodo={addTodo} />
			<div>
				<ul className="todo-tag">
					{tags.map((tag, id) => (
						<li key={id}>
							<p>{tag}</p>
							<button onClick={() => handleDeleteTag(id)}>x</button>
						</li>
					))}
				</ul>
			</div>
			<TodoList
				todos={todos}
				toggleComplete={toggleComplete}
				onRemoveTodo={removeTodo}
				editTodo={editTodo}
				submitTodo={submitTodo}
			/>
		</div>
	);
}

export default App;
