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
          className="col-span-3 col-start-2"
        />
        <Button
          className="col-start-6"
          text="check"
          icon="Edit"
          onClick={() => Buttons.edit(item)}
        />
      </>
    );
  }
  return (
    <label className="col-span-5 col-start-2 space-x-10">
      <input onChange={() => Methods.toggle(item.id, 'done')} type="checkbox" checked={item.done} />
      <span className="cursor-pointer text-lg" onClick={() => Methods.toggle(item.id, 'edit')}>
        {item.value}
      </span>
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
