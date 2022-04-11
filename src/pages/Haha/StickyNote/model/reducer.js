const ADD_NOTE = 'add';
const DELETE_NOTE = 'delete';

const initState = [];

export default function noteReducer(state = initState, action) {
  switch (action.type) {
    case ADD_NOTE:
      console.log(ADD_NOTE);
      break;
    case DELETE_NOTE:
      console.log(DELETE_NOTE);
      break;
    default:
      return state;
  }
}
