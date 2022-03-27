import clsx from 'clsx';

export const Button = ({ fn, message, customStyle }) => {
  return (
    <>
      <button
        type="submit"
        className={clsx(
          customStyle,
          'min-h-min w-20 rounded-md px-2',
          'border border-solid text-white'
        )}
        onClick={fn}
      >
        {message}
      </button>
    </>
  );
};

export default Button;
