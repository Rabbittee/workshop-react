import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Add() {
  const { Methods, Buttons, input } = useTodoList();

  return (
    <div className="relative mb-5">
      <Input handleEvent={Methods.add} placeholder="add new item" value={input} />
      <Button text="add" icon="Add" onClick={Buttons.add} />
    </div>
  );
}
