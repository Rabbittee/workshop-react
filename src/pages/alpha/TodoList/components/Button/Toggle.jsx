import clsx from 'clsx';
import { State } from '../../constant';

export function Toggle({ onUpdate, toggleEdit, item }) {
  return (
    <button
      className={clsx(
        'rounded-lg border border-cyan-500 p-2 text-cyan-500',
        'transition-colors duration-300 hover:bg-cyan-500 hover:text-white'
      )}
      onClick={
        item.state === State.edit
          ? () => onUpdate({ ...item, state: State.null })
          : () => toggleEdit(item)
      }
    >
      {item.state === State.edit ? 'Save' : 'Edit'}
    </button>
  );
}
