import clsx from 'clsx';
import { Input } from './Input';
import { State, Status } from '../constant';
import { List } from './List';

export function Todo({ list, toggleEdit, toggleStatus, onUpdate, onDelete, onChange }) {
  return (
    <List
      title="To do"
      status={Status.todo}
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
