export function DeleteIcon({ onClick }) {
  return (
    <div onClick={onClick}>
      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    </div>
  );
}