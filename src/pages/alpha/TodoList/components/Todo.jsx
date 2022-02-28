import { STATUS } from '../constant';
import { List } from './List';

export function Todo({ list, toggleEdit, toggleStatus, onUpdate, onDelete, onChange }) {
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
