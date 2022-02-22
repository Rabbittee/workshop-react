import { Input } from './Input';

export function Form({ onSubmit }) {
  return (
    <form
      className="flex w-full justify-center space-x-5 rounded-lg border-2 border-teal-200 bg-gray-100 p-8 shadow-lg"
      onSubmit={onSubmit}
    >
      <Input name="todo" />
      <button
        type="submit"
        className="rounded-md bg-gray-400 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
      >
        +
      </button>
    </form>
  );
}
