import { useTodoList } from '../store/TodoListContext';
import Item from '../views/Item';

export default function List() {
  const { list } = useTodoList();

  return (
    <ul>
      {list.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </ul>
  );
}
