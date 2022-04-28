import { Icon } from '../assets';
import clsx from 'clsx';

export default function Button({ onClick, text, icon, className }) {
  const Tag = Icon[icon];

  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'inline-flex h-12 items-center gap-1 rounded-lg bg-[#3b5998] px-4 py-2.5 text-center text-sm text-white hover:bg-[#3b5998]/90 '
      )}
    >
      {icon && (
        <Tag
          stroke="currentColor"
          width="1.5rem"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {text}
    </button>
  );
}
