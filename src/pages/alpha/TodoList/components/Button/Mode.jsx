import clsx from 'clsx';
import { State, Status } from '../../constant';
export function Mode({ toggleStatus, item }) {
  return (
    <button
      className={clsx(
        'flex h-6 w-6 items-center justify-center',
        'rounded-full border  transition-all duration-300 active:scale-90',
        item.status === Status.complete
          ? 'border-green-400 text-green-400 '
          : 'border-gray-400 text-gray-400',
        item.state === State.edit && ' pointer-events-none'
      )}
      onClick={() => toggleStatus(item)}
    >
      ✓
    </button>
  );
}
