import { Input } from './Input';
import Button from './Button';

export function Form({ onSubmit }) {
  return (
    <form
      className="flex w-full justify-center space-x-5 rounded-lg border-2 border-teal-200 bg-gray-100 p-8 shadow-lg"
      onSubmit={onSubmit}
    >
      <Input name="todo" />
      <Button.Submit />
    </form>
  );
}
