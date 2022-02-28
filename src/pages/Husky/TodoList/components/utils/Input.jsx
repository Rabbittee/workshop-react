export function Input({ placeholder, onInput }) {
  return (
    <input
      type="text"
      className="w-full rounded-md border bg-white py-3 pl-12 pr-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
      placeholder={placeholder}
      onInput={onInput}
    />
  );
}
