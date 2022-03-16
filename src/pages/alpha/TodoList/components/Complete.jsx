import { STATUS } from '../constant';
import { List } from './List';
import { useTodoList } from './TodoListContext';

export function Complete() {
  const { list, toggleStatus, onDelete } = useTodoList();

  return (
    <List
      title="Complete"
      list={list}
      toggleStatus={toggleStatus}
      onDelete={onDelete}
      status={STATUS.complete}
      className="border-yellow-400 text-yellow-400"
    />
  );
}
