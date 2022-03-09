/*
 * @Author:Claire Li
 * @Date:2022-02-28 16:05:50
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-10 00:22:18
 * @Description:
 */
import { useState } from 'react';

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    props.editTask(props.id, newName);
    setNewName(newName);
    setEditing(false);
  }
  const editingTemplate = (
    <>
      <input
        id={props.id}
        type="text"
        className="font-style border-none bg-transparent px-1 focus:outline-none"
        autoComplete="off"
        autoFocus
        value={newName}
        onChange={handleChange}
      />
      <button className="font-style w-14 p-1 text-sm hover:text-green-700" onClick={handleSubmit}>
        update
      </button>
    </>
  );

  const viewTemplate = (
    <>
      <div className="space-x-2">
        <input
          id={props.id}
          type="checkbox"
          className=""
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
          onClick={() => setEditing(true)}
        />
        <label htmlFor={props.id} className="font-style">
          {props.name}
        </label>
      </div>
      <button
        className="font-style w-14 p-1 text-sm hover:text-rose-600"
        onClick={() => props.deleteTask(props.id)}
      >
        delete
      </button>
    </>
  );

  return (
    <li>
      <div className="m-3 flex justify-between space-x-5 border-b">
        {isEditing ? editingTemplate : viewTemplate}
      </div>
    </li>
  );
}

export default Todo;
