import { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <form className="todo__form">
      <input type="text" value={newTodo} className="todo__input" placeholder="Make a note..." onChange={handleChange} />
        <button type="submit" className="todo__button" onClick={handleSubmit}>
          Add Note
        </button>
    </form>
  )
};
