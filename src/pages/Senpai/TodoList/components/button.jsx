import clsx from 'clsx';

export const Button = ({ fn, message, customStyle, ...args }) => {
  return (
    <>
      <button
        type="submit"
        className={clsx(
          customStyle,
          'min-h-min w-20 rounded-md px-2',
          'border border-solid bg-cyan-700 text-white'
        )}
        onClick={() => fn(...Object.values({ ...args }))}
      >
        {message}
      </button>
    </>
  );
};

export default Button;
