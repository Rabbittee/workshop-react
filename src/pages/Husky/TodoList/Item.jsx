import { Delete, Edit } from './components/button';

export function Item({ task, onClick, clickDelete, clickEdit }) {
  return (
    <li className="mb-2 flex flex-row border-gray-400">
      <div className="flex flex-1 transform select-none items-center rounded-md bg-white p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <label className="flex flex-1 items-center space-x-3 pl-1" onClick={onClick}>
          <input
            type="checkbox"
            className="bg-check h-6 w-6 rounded-md border border-gray-300 bg-white checked:border-transparent checked:bg-green-500 focus:outline-none"
          />
          <span className={'font-normal text-gray-700' + (task.status ? ' line-through' : '')}>
            {task.title}
          </span>
        </label>
        <button className="flex w-12 justify-end gap-2 text-right">
          {!task.status && <Edit onClick={clickEdit} />}
          <Delete onClick={clickDelete} />
        </button>
      </div>
    </li>
  );
}
