export default function Input({ fn, value, placeholder }) {
  return (
    <input
      className="border pl-2"
      placeholder={placeholder || ''}
      onChange={fn}
      onKeyDown={fn}
      value={value}
    />
  );
}
