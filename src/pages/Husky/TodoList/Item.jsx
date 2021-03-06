import clsx from 'clsx';

import { Icon } from './components/icon';
import { Input } from './components/utils';
import { ItemContext, useItemContext } from './todoContext';

function EditToggle() {
  const {
    task,
    methods: { onClick, editTask },
  } = useItemContext();

  if (task.edit) {
    return (
      <Input
        value={task.editTitle}
        onInput={(e) => editTask(e.target.value)}
        focusEffect={task.edit}
      />
    );
  }
  return (
    <label className="flex flex-1 items-center space-x-3 pl-1">
      <input
        type="checkbox"
        className="bg-check h-6 w-6 rounded-md border border-gray-300 bg-white checked:border-transparent focus:outline-none"
        onChange={onClick}
      />
      <span className={clsx('font-normal text-gray-700', task.status && 'line-through')}>
        {task.title}
      </span>
    </label>
  );
}

function Buttons() {
  const {
    task,
    methods: { clickEdit, clickDelete },
  } = useItemContext();

  return (
    <button className="flex w-12 justify-end gap-2 text-right">
      {!task.status && <Icon.Edit className="h-5 w-5 text-gray-400" onClick={() => clickEdit()} />}
      {task.edit ? (
        <Icon.Cancel className="h-5 w-5 text-gray-400" onClick={() => clickEdit(true)} />
      ) : (
        <Icon.Delete className="h-5 w-5 text-gray-400" onClick={clickDelete} />
      )}
    </button>
  );
}

export function Item(props) {
  return (
    <ItemContext.Provider value={props}>
      <li className="mb-2 flex flex-row border-gray-400">
        <div className="flex flex-1 transform select-none items-center gap-4 rounded-md bg-white p-4 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <EditToggle />
          <Buttons />
        </div>
      </li>
    </ItemContext.Provider>
  );
}
