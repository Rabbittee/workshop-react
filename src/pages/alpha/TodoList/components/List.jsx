import clsx from 'clsx';
import { STATUS, STATE } from '../constant';
import Button from './Button';
import { Input } from './Input';
export function List({
  title,
  list,
  className,
  toggleStatus,
  onDelete,
  status,
  onUpdate,
  toggleEdit,
  onChange,
}) {
  return (
    <section className="flex w-full flex-col">
      <h2 className={clsx('w-full self-start border-b-2  pb-4 text-xl ', className)}>{title}</h2>
      <ul className="complete mt-6 flex flex-col space-y-12" onChangeCapture={onChange}>
        {list
          .filter((item) => item.status === status)
          .map((item) => {
            return (
              <li
                className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 "
                key={item.id}
              >
                <div className="flex items-center justify-center space-x-4">
                  <Button.Mode toggleStatus={toggleStatus} item={item} />
                  {item.state !== STATE.edit && (
                    <label
                      className={clsx(
                        status === STATUS.complete ? 'text-green-400 line-through' : 'text-black'
                      )}
                    >
                      {item.title}
                    </label>
                  )}
                  {item.state === STATE.edit && (
                    <Input name={item.id} value={item.title} onChange={onChange} />
                  )}
                </div>
                <div className="flex space-x-4">
                  {status === STATUS.todo && (
                    <Button.Toggle item={item} onUpdate={onUpdate} toggleEdit={toggleEdit} />
                  )}
                  <Button.Delete item={item} onDelete={onDelete} />
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
