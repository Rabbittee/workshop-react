import clsx from 'clsx';
import { STATE, STATUS } from '../../constant';
export function Mode({ toggleStatus, status, state }) {
  return (
    <button
      className={clsx(
        'flex h-6 w-6 items-center justify-center',
        'rounded-full border  transition-all duration-300 active:scale-90',
        status === STATUS.complete
          ? 'border-green-400 text-green-400 '
          : 'border-gray-400 text-gray-400',
        state === STATE.edit && ' pointer-events-none'
      )}
      onClick={toggleStatus}
    >
      ✓
    </button>
  );
}
