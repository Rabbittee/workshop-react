import clsx from 'clsx';

export function Input({ value, onInput }) {
  return (
    <input
      type="text"
      value={value}
      onInput={onInput}
      className={clsx(
        'mx-1.5 w-full px-3 py-1.5',
        'rounded outline-none ring-1 ring-slate-200',
        'duration-250 transition',
        'focus:ring-indigo-300'
      )}
    />
  );
}
