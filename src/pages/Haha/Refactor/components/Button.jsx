import { useTodoList } from '../store/TodoListContext';

export default function Button() {
  const { add } = useTodoList();
  return <button onClick={add}>add</button>;
}
