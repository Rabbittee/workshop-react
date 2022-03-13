import Icon from './Icon';
import clsx from 'clsx';

function Button({ className, onClick, message, logo, size }) {
  return (
    <button className={clsx(className, 'col-span-1')} onClick={onClick}>
      {logo && <Icon logo={logo} size={size} />}
      <label className={clsx('mx-2', { 'text-white': logo || message === 'Delete' })}>
        {message}
      </label>
    </button>
  );
}
export default Button;
