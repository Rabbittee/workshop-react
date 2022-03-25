import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';
import Input from '../components/Input';

export function Add() {
  const { add, input, addBtn } = useTodoList();
  return (
    <div className="relative mb-5">
      <Input fn={add} placeholder="add new item" value={input} />
      <Button onClick={() => addBtn(input)} />
    </div>
  );
}
