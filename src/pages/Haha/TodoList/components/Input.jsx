import clsx from 'clsx';

function Input({ inputVal, onChange, onKeyDown, className, label }) {
  return (
    <input
      value={inputVal}
      placeholder={label}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={clsx(
        className,
        'focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
      )}
    />
  );
}
export default Input;
