function Input({ item, onChange, onKeyDown, Class, label }) {
  return (
    <input
      value={item.val}
      placeholder={label}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${Class} 'focus:shadow-outline focus:outline-none' appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow`}
    />
  );
}
export default Input;
