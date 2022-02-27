import { Button, Input, Checkbox } from './index';
import { clsx } from '../utils';

export function TodoItem({
    todo,
    toggleState,
    toggleEdit,
    updateTodo,
    deleteTodo
  }) {
  const { id, title, isDone, isEdit } = todo;
  return (
    <li className={clsx(
      'py-3',
      'flex items-center justify-end',
    )}>

      <label htmlFor={`todo-${id}`} className={clsx(
        'mr-auto cursor-pointer flex'
      )} onClick={toggleState}>

        <Checkbox done={isDone} id={`todo-${id}`} />

        { isEdit ? '' : <span className={clsx(
          'mx-1.5 px-3 py-1.5',
          isDone ? 'line-through' : ''
        )}>{title}</span> }

      </label>

      { isEdit ? <Input value={title} onInput={(todo) => updateTodo(todo, id)} /> : '' }

      <Button
        text={isEdit ? 'Save' : 'Edit'}
        onClick={toggleEdit}
      />

      <Button text="Delete"
        onClick={() => deleteTodo(id)}
        color={'bg-rose-500 hover:bg-rose-600'}
      />

    </li>
  );

}
