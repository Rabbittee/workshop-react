import clsx from 'clsx';
export function Delete({ onDelete, item }) {
  return (
    <button
      className={clsx(
        'rounded-lg border border-red-500 p-2 text-red-500',
        'transition-colors duration-300 hover:bg-red-500 hover:text-white'
      )}
      onClick={() => onDelete(item)}
    >
      Delete
    </button>
  );
}
