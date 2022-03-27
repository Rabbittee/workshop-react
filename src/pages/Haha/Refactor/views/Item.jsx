import { useTodoList } from '../store/TodoListContext';
import Input from '../components/Input';
import Button from '../components/Button';

function EditToggle({ item }) {
  const { Methods, Buttons } = useTodoList();

  if (item.edit) {
    return (
      <>
        <Input value={item.value} fn={(e) => Methods.edit(e, item)} />
        <Button text="check" onClick={() => Buttons.edit(item)} />
      </>
    );
  }
  return (
    <label>
      <span onClick={() => Methods.toggle(item.id, 'edit')}>{item.value}</span>
      <input onChange={() => Methods.toggle(item.id, 'done')} type="checkbox" checked={item.done} />
    </label>
  );
}

export default function Item({ item }) {
  const { Buttons } = useTodoList();

  return (
    <div className="relative">
      <EditToggle item={item} />
      <Button text="delete" onClick={() => Buttons.delete(item.id)} />
    </div>
  );
}
