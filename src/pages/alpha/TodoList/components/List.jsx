import clsx from 'clsx';
import { Status } from '../constant';
import Button from './Button';
export function List({
  title,
  list,
  className,
  toggleStatus,
  onDelete,
  status,
  onUpdate,
  toggleEdit,
}) {
  return (
    <section className="flex w-full flex-col">
      <h2 className={clsx('w-full self-start border-b-2  pb-4 text-xl ', className)}>{title}</h2>
      <ul className="complete mt-6 flex flex-col space-y-12">
        {list
          .filter((item) => item.status === status)
          .map((item) => {
            return (
              <li
                className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 "
                key={item.id}
              >
                <div className="flex items-center justify-center space-x-4">
                  <Button.Mode status={item.status} toggleStatus={toggleStatus} item={item} />
                  <label
                    className={clsx(
                      status === Status.complete ? 'text-green-400 line-through' : 'text-black'
                    )}
                  >
                    {item.title}
                  </label>
                </div>
                <div className="flex space-x-4">
                  {status === Status.todo && (
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
