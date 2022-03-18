import clsx from 'clsx';

function Input({ inputVal, onChange, onKeyDown, className, label }) {
  return (
    <input
      value={inputVal}
      placeholder={label}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={clsx(className, 'input-style focus:shadow-outline')}
    />
  );
}
export default Input;
