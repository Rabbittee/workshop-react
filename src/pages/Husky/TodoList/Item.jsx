import { DeleteIcon, EditIcon } from './components/icon';
import { Input } from './components/utils';

export function Item({ task, onClick, clickDelete, clickEdit, editTask }) {
  function editToggle(edit) {
    if (edit) {
      return <Input value={task.editTitle} onInput={(e) => editTask(e.target.value)} />;
    }
    return (
      <label className="flex flex-1 items-center space-x-3 pl-1">
        <input
          type="checkbox"
          className="bg-check h-6 w-6 rounded-md border border-gray-300 bg-white checked:border-transparent focus:outline-none"
          onChange={onClick}
        />
        <span className={'font-normal text-gray-700' + (task.status ? ' line-through' : '')}>
          {task.title}
        </span>
      </label>
    );
  }

  return (
    <li className="mb-2 flex flex-row border-gray-400">
      <div className="flex flex-1 transform select-none items-center gap-4 rounded-md bg-white p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        {editToggle(task.edit)}
        <button className="flex w-12 justify-end gap-2 text-right">
          {!task.status && <EditIcon onClick={clickEdit} />}
          <DeleteIcon onClick={clickDelete} />
        </button>
      </div>
    </li>
  );
}
