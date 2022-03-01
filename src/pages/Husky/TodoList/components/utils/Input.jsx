export function Input({ value, placeholder, onInput, icon = false }) {
  return (
    <input
      type="text"
      className={
        'w-full rounded-md border bg-white py-3 pr-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring' +
        (icon ? ' pl-12' : ' pl-4')
      }
      value={value || ''}
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}
