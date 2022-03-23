import { useTodoList } from '../store/TodoListContext';
import Input from '../components/Input';

function EditToggle({ item, fn }) {
  if (item.edit) {
    const handleEvent = (e) => fn.edit(e, item);
    return <Input value={item.value} onChange={handleEvent} onKeyDown={handleEvent} />;
  }
  return (
    <label>
      <span onClick={() => fn.toggle(item, 'edit')}>{item.value}</span>
      <input onChange={() => fn.toggle(item, 'done')} type="checkbox" checked={item.done} />
    </label>
  );
}

export default function Item({ item }) {
  const { toggle, edit, setInput, input } = useTodoList();
  const methods = { toggle, edit, setInput, input };
  return (
    <div>
      <EditToggle item={item} fn={methods} />
    </div>
  );
}
