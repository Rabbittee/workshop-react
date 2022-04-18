/*
 * @Author:Claire Li
 * @Date:2022-02-28 16:05:50
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-06 15:30:53
 * @Description:
 */
function Todo({ name, completed, id, toggleTaskCompleted, deleteTask }) {
  return (
    <li>
      <div className="m-3 flex justify-between space-x-5 border-b">
        <div className="space-x-2">
          <input
            id={id}
            type="checkbox"
            className=""
            defaultChecked={completed}
            onChange={() => toggleTaskCompleted(id)}
          />
          <label htmlFor="todo-0" className="font-style">
            {name}
          </label>
        </div>
        <button
          className="font-style w-14 p-1 text-sm hover:text-rose-600"
          onClick={() => deleteTask(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
