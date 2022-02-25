import clsx from 'clsx';
import { Status } from '../../constant';
export function Mode({ status, toggleStatus, item }) {
  return (
    <button
      className={clsx(
        'flex h-6 w-6 items-center justify-center',
        'rounded-full border  transition-all duration-300 active:scale-90',
        status === Status.complete
          ? 'border-green-400 text-green-400 '
          : 'border-gray-400 text-gray-400'
      )}
      onClick={() => toggleStatus(item)}
    >
      ✓
    </button>
  );
}
