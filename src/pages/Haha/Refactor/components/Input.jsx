export default function Input({ onChange, onKeyDown, value, placeholder = '' }) {
  return (
    <input
      className="border pl-2"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
}
