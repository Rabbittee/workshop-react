import { clsx } from '../utils';

export function Input({ value, onInput }) {
  return (
    <input
      type="text"
      value={value}
      onInput={onInput}
      className={clsx(
        'mx-1.5 px-3 py-1.5 w-full',
        'rounded outline-none ring-1 ring-slate-200',
        'transition duration-250',
        'focus:ring-indigo-300'
      )}
    />
  );
}
