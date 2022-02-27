export function clsx(...classnames) {
  return classnames.filter(Boolean).join(' ');
}

export function storate() {
  const key = 'todo-erica';
  return {
    get: () => JSON.parse(localStorage.getItem(key)) || [],
    set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  };
}
