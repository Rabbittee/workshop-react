export default function storage(key = 'todoList_pencil') {
  return {
    get: () => JSON.parse(localStorage.getItem(key)),
    set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  };
}
