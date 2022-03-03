import clsx from 'clsx';

export function Button({ text, color = 'bg-slate-400 hover:bg-slate-600', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'mr-1.5 px-3 py-2 text-sm',
        'rounded text-white outline-none',
        'duration-350 transition',
        color
      )}
    >
      {text}
    </button>
  );
}
