import { Input } from './Input';
import { clsx } from '../utils';

export function Todo({ list, toggleEdit, toggleStatus, onUpdate, onDelete, onChange }) {
  return (
    <ul className="in-progress mt-6 flex flex-col space-y-12" onChangeCapture={onChange}>
      {list.map((item) => {
        return (
          item.status === 'todo' && (
            <li
              className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 "
              key={item.id}
            >
              <div className="flex items-center justify-center space-x-4">
                <button
                  className={clsx(
                    'flex h-6 w-6 items-center justify-center',
                    'rounded-full border  transition-all duration-300 active:scale-90',
                    item.status === 'complete'
                      ? 'border-green-400 text-green-400'
                      : 'border-gray-400 text-gray-400'
                  )}
                  onClick={() => toggleStatus(item)}
                >
                  ✓
                </button>
                <label className={clsx('text-gray-600', item.state === 'edit' ? 'hidden' : '')}>
                  {item.title}
                </label>
                <Input
                  name={item.id}
                  value={item.title}
                  className={clsx(item.state === 'edit' ? '' : 'hidden')}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  className={clsx(
                    'rounded-lg border border-cyan-500 p-2 text-cyan-500',
                    'transition-colors duration-300 hover:bg-cyan-500 hover:text-white',
                    item.state === 'edit' ? '' : 'hidden'
                  )}
                  onClick={() => onUpdate({ ...item, state: 'null' })}
                >
                  Save
                </button>
                <button
                  className={clsx(
                    'rounded-lg border border-cyan-500 p-2 text-cyan-500',
                    'transition-colors duration-300 hover:bg-cyan-500 hover:text-white',
                    item.state === 'edit' ? 'hidden' : ''
                  )}
                  onClick={() => toggleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className={clsx(
                    'rounded-lg border border-red-500 p-2 text-red-500',
                    'transition-colors duration-300 hover:bg-red-500 hover:text-white'
                  )}
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
}
