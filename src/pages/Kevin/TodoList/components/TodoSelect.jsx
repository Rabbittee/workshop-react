import { useTodo } from './TodoContext.jsx';

export default function TodoSelect() {
  const { listStatus, setTodoFilter } = useTodo();

  const onTodoStatusChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTodoFilter(value);
  };

  return (
    <select
      name="todo-status"
      id="todo-status"
      className="mr-auto cursor-pointer bg-slate-600 p-2 text-white"
      onChange={onTodoStatusChange}
    >
      <option value={listStatus.all.value}>Show all</option>
      <option value={listStatus.completed.value}>Completed</option>
      <option value={listStatus.onProcessing.value}>On processing</option>
    </select>
  );
}
