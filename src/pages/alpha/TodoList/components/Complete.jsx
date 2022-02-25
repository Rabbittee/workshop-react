import { Status } from '../constant';
import { List } from './List';

export function Complete({ list, toggleStatus, onDelete }) {
  return (
    <List
      title="Complete"
      list={list}
      toggleStatus={toggleStatus}
      onDelete={onDelete}
      status={Status.complete}
      className="border-yellow-400 text-yellow-400"
    />
  );
}
