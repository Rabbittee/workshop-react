import { STATUS } from '../constant';
import { List } from './List';

export function Complete() {
  return (
    <List
      title="Complete"
      status={STATUS.complete}
      className="border-yellow-400 text-yellow-400"
    />
  );
}
