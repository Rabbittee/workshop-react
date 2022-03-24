import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';
import Input from '../components/Input';

export function Add() {
  const { add, input } = useTodoList();
  return (
    <>
      <Button />
    </>
      <Input fn={add} placeholder="add new item" value={input.value} />
  );
}
