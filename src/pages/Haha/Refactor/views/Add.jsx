import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';
import Input from '../components/Input';

export function Add() {
  const { submit, input, submitBtn } = useTodoList();
  return (
    <div className="relative mb-5">
      <Input fn={submit} placeholder="add new item" value={input} />
      <Button onClick={submitBtn} />
    </div>
  );
}
