export default function Input({ handleEvent, value, placeholder }) {
  return (
    <input
      className="border pl-2"
      placeholder={placeholder}
      onChange={handleEvent}
      onKeyDown={handleEvent}
      value={value}
    />
  );
}
