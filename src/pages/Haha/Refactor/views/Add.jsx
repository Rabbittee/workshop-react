import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';
import Input from '../components/Input';

export function Add() {
  const { Methods, Buttons, input } = useTodoList();

  return (
    <div className="relative mb-5">
      <Input fn={Methods.add} placeholder="add new item" value={input} />
      <Button onClick={Buttons.add} />
    </div>
  );
}
