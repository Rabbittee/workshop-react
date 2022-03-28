import { Icon } from '../assets';

export default function Button({ onClick, text, icon }) {
  const Tag = Icon[icon];

  return (
    <button onClick={onClick}>
      {icon && (
        <Tag
          stroke="currentColor"
          width="2rem"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      <span>{text}</span>
    </button>
  );
}
