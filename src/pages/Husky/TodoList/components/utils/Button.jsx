export function Button({ text, onClick }) {
  return (
    <button
      className="rounded-lg bg-gray-700 px-4 py-3 text-sm font-medium uppercase text-gray-100 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
