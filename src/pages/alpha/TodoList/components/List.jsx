import clsx from 'clsx';
import { STATUS, STATE } from '../constant';
import Button from './Button';
import { Input } from './Input';
import { useTodoList
 } from './TodoListContext';
export function List({
  title,
  status,
  className,
}) {

  const { list, toggleEdit, toggleStatus, onChange, onDelete, onUpdate } = useTodoList();
  return (
    <section className="flex w-full flex-col">
      <h2 className={clsx('w-full self-start border-b-2 pb-4 text-xl ',className)}>{title}</h2>
      <ul className="complete mt-6 flex flex-col space-y-12" onChangeCapture={onChange}>
        {list
          .map((item) => item.status === status && (
              <li
                className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 "
                key={item.id}
              >
                <div className="flex items-center justify-center space-x-4">
                  <Button.Mode toggleStatus={() => toggleStatus(item)} state={item.state} status={item.status}/>
                  {item.state !== STATE.edit ? (
                    <label
                      className={clsx(
                        'p-2',
                        status === STATUS.complete ? 'text-green-400 line-through' : 'text-black'
                      )}
                    >
                      {item.title}
                    </label>
                  )
                  :(
                    <Input name={item.id} value={item.title} />
                  )}
                </div>
                <div className="flex space-x-4">
                  {status === STATUS.todo && (
                    <Button.Toggle item={item} onUpdate={onUpdate} toggleEdit={toggleEdit} />
                  )}
                  <Button.Delete onDelete={() => onDelete(item)} />
                </div>
              </li>
            )
          )}
      </ul>
    </section>
  );
}
