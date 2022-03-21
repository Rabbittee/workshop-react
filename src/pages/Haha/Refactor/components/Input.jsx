import { useTodoList } from '../store/TodoListContext';

export default function Input({ onChange, onKeyDown, value, placeholder = '' }) {
  const { input } = useTodoList();

  return (
    <input
      className="border pl-2"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
}
