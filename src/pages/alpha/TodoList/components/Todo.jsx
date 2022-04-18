import { STATUS } from '../constant';
import { List } from './List';

export function Todo() {
  return (
    <List
      title="To do"
      status={STATUS.todo}
      className="border-blue-500 text-blue-500"
    />
  );
}
