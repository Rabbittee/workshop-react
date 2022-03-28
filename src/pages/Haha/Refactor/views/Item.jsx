import { useTodoList } from '../store/TodoListContext';
import Input from '../components/Input';
import Button from '../components/Button';

function EditToggle({ item }) {
  const { Methods, Buttons } = useTodoList();

  if (item.edit) {
    return (
      <>
        <Input
          value={item.value}
          handleEvent={(e) => Methods.edit(e, item)}
          className="col-span-3"
        />
        <Button text="check" icon="Edit" onClick={() => Buttons.edit(item)} />
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
    <li className="my-3 grid grid-cols-8 gap-4">
      <EditToggle item={item} />
      <Button text="delete" icon="Trash" onClick={() => Buttons.delete(item.id)} />
    </li>
  );
}
