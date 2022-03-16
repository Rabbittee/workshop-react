import { STATUS } from '../constant';
import { List } from './List';
import { useTodoList } from './TodoListContext';

export function Todo() {
  const { list, toggleEdit, toggleStatus, onChange, onDelete, onUpdate } = useTodoList();

  return (
    <List
      title="To do"
      status={STATUS.todo}
      list={list}
      toggleEdit={toggleEdit}
      toggleStatus={toggleStatus}
      onDelete={onDelete}
      onUpdate={onUpdate}
      onChange={onChange}
      className="border-blue-500 text-blue-500"
    />
  );
}
