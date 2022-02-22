import { clsx } from '../utils';
export function Complete({ list, toggleStatus, onDelete }) {
  return (
    <section className="flex w-full flex-col">
      <h2 className="w-full self-start border-b-2 border-amber-200 pb-4 text-xl text-amber-200">
        Complete
      </h2>
      <ul className="complete mt-6 flex flex-col space-y-12">
        {list.map((item) => {
          return (
            item.status === 'complete' && (
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
                        ? 'border-green-400 text-green-400 '
                        : 'border-gray-400 text-gray-400'
                    )}
                    onClick={() => toggleStatus(item)}
                  >
                    ✓
                  </button>
                  <label
                    className={clsx(
                      item.status === 'complete' ? 'text-green-400 line-through' : 'xt-gray-400'
                    )}
                  >
                    {item.title}
                  </label>
                </div>
                <button
                  className={clsx(
                    'rounded-lg border border-red-500 p-2 text-red-500',
                    'transition-colors duration-300 hover:bg-red-500 hover:text-white'
                  )}
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
