import clsx from 'clsx';

export default function Input({ handleEvent, value, placeholder, className }) {
  return (
    <input
      className={clsx(className, 'rounded-xl  border-2  py-1 pl-2')}
      placeholder={placeholder}
      onChange={handleEvent}
      onKeyDown={handleEvent}
      value={value}
    />
  );
}
