import { useTodoList } from '../store/TodoListContext';
import Input from '../components/Input';
import Button from '../components/Button';

function EditToggle({ item, fn }) {
  if (item.edit) {
    const handleEvent = (e) => fn.edit(e, item);

    return (
      <>
        <Input value={item.value} fn={handleEvent} />
        <Button text="check" onClick={() => fn.editBtn(item)} />
      </>
    );
  }
  return (
    <label>
      <span onClick={() => fn.toggle(item, 'edit')}>{item.value}</span>
      <input onChange={() => fn.toggle(item, 'done')} type="checkbox" checked={item.done} />
    </label>
  );
}

export default function Item({ item }) {
  const { input, toggle, edit, delBtn, editBtn } = useTodoList();
  const methods = { input, toggle, edit, editBtn };
  return (
    <div className="relative">
      <EditToggle item={item} fn={methods} />
      <Button text="delete" onClick={() => delBtn(item)} />
    </div>
  );
}
