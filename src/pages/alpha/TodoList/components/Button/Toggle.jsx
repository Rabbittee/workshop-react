import clsx from 'clsx';
import { STATE } from '../../constant';

export function Toggle({ onUpdate, toggleEdit, item }) {
  return (
    <button
      className={clsx(
        'rounded-lg border border-cyan-500 p-2 text-cyan-500',
        'transition-colors duration-300 hover:bg-cyan-500 hover:text-white'
      )}
      onClick={
        item.state === STATE.edit
          ? () => onUpdate({ ...item, state: STATE.null })
          : () => toggleEdit(item)
      }
    >
      {item.state === STATE.edit ? 'Save' : 'Edit'}
    </button>
  );
}
