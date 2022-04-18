import Todo from './todo.js';
import { initTodoItems } from './initTodoItems.js';

function HandleLocalStorage(key) {
  if (key === undefined) throw new Error('handleLocalStorage: key should be passed');
  const storage = window.localStorage;
  return {
    set(data) {
      storage.setItem(key, JSON.stringify(data));
    },
    get() {
      return JSON.parse(storage.getItem(key));
    },
  };
}

export default class LocalStorageTodo extends Todo {
  constructor(localStorageKey, debug) {
    super(debug);
    this.storage = null;
    this.latestUpdateAt = null;
    this.init(localStorageKey);
  }

  init(localStorageKey) {
    const storage = HandleLocalStorage(localStorageKey);
    const storedData = storage.get() || {};
    super.todos = storedData.todos ?? initTodoItems;
    this.storage = storage;
    this.latestUpdateAt = storedData.latestUpdateAt ?? null;
  }

  setStorage(todos) {
    // const latestUpdateAt = super.timestamp();
    this.storage.set({
      latestUpdateAt: new Date().getTime(),
      todos,
    });
  }

  add(newItem) {
    const result = super.add(newItem);
    this.setStorage(result.todos);
    return result;
  }

  remove(itemId) {
    const result = super.remove(itemId);
    this.setStorage(result.todos);
    return result;
  }

  edit(itemId, editItem) {
    const result = super.edit(itemId, editItem);
    this.setStorage(result.todos);
    return result;
  }
}
