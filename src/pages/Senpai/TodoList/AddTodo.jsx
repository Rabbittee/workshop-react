import clsx from 'clsx';
import Button from './components/Button';
import { ADD_TODO } from './components/constant';

function AddTodo({ inputValue, setInputValue, addTodo }) {
  return (
    <form
      className={clsx(
        'flex items-center justify-around py-2',
        'border-2 border-solid border-gray-300 bg-gray-300',
        'rounded-t-md'
      )}
    >
      <label>
        <input
          id={ADD_TODO}
          name={ADD_TODO}
          type="text"
          placeholder="type something"
          onInput={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={clsx(
            'h-full px-1',
            'text text-lg text-cyan-700 placeholder-gray-300',
            'rounded-md border-cyan-700'
          )}
        />
      </label>
      <Button
        fn={addTodo}
        message="Submit"
        customStyle="hover:bg-white hover:text-cyan-700 h-full"
      />
    </form>
  );
}
export default AddTodo;
