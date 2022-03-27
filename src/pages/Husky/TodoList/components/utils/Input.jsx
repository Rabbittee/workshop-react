import { useEffect, useRef } from 'react';

export function Input({ value, placeholder, onInput, focusEffect, icon = false }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current !== null && inputRef.current.focus();
  }, [focusEffect]);

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
      ref={inputRef}
    />
  );
}
