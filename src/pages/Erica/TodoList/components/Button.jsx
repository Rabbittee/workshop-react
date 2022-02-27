import { clsx } from '../utils';
export function Button({ text, color, onClick }) {
  const style = color || 'bg-slate-400 hover:bg-slate-600';

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'mr-1.5 px-3 py-2 text-sm',
        'rounded text-white outline-none',
        'duration-350 transition',
        style
      )}
    >
      {text}
    </button>
  );
}
