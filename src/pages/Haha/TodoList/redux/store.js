import { createStore } from 'redux';

// 管理的 state 結構
const initState = {
  name: 'Jack',
  todolist: ['first'],
};

// 可以改變 state
const reducer = (state = initState, action) => {
  // 初始參數 state，action
  switch (action.type) {
    case 'add_todo': {
      const tempTODO = state.todolist.map((list) => list);
      tempTODO.push(action.payload.listName);
      return {
        ...state,
        todolist: tempTODO,
      };
    }
    case 'rename': {
      const rename = (state.name = action.payload.name);
      return { ...state, name: rename };
    }
    default:
      return state;
  }
};

export const store = createStore(reducer);
