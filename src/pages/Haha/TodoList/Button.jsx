import Icon from './Icon';
import clsx from 'clsx';

const basicClass =
  'items-centerinline-flex flex items-center justify-center rounded-lg py-2 pl-4 pr-3 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50';

function Button({ logo, onClick, label, Class }) {
  return (
    <button onClick={onClick} className={clsx(`col-span-1 ${basicClass} ${Class}`)}>
      <Icon logo={logo} size="25" />
      <label className="mx-2 text-white">{label}</label>
    </button>
  );
}
export default Button;
