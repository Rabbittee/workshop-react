import clsx from 'clsx';
import { Button, Input, Checkbox } from './';

export function TodoItem({ todo, toggleState, toggleEdit, updateTodo, deleteTodo }) {
  const { id, title, isDone, isEdit } = todo;

  return (
    <li className={clsx('py-3', 'flex items-center justify-end')}>
      <label className={clsx('mr-auto flex cursor-pointer')} onClick={toggleState}>
        <Checkbox done={isDone} />

        {!isEdit && (
          <span className={clsx('mx-1.5 px-3 py-1.5', isDone && 'line-through')}>{title}</span>
        )}
      </label>

      {isEdit && <Input value={title} onInput={(todo) => updateTodo(todo, id)} />}

      <Button text={isEdit ? 'Save' : 'Edit'} onClick={toggleEdit} />

      <Button
        text="Delete"
        onClick={() => deleteTodo(id)}
        color={'bg-rose-500 hover:bg-rose-600'}
      />
    </li>
  );
}
