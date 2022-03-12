import Icon from './Icon';
import clsx from 'clsx';

function Button({ className, fn, message, logo, size }) {
  return (
    <button className={clsx(className, 'col-span-1')} onClick={fn}>
      {logo && <Icon logo={logo} size={size} />}
      <label className={clsx('mx-2 text-white', logo || message === 'Delete' || 'text-gray-600')}>
        {message}
      </label>
    </button>
  );
}
export default Button;
