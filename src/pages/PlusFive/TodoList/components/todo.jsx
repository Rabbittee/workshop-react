/*
 * @Author:Claire Li
 * @Date:2022-02-28 16:05:50
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-09 22:14:45
 * @Description:
 */
function Todo(props) {
  return (
    <li>
      <div className="flex justify-between m-3 space-x-5 border-b">
        <div className="space-x-2">
          <input
            id={props.id}
            type="checkbox"
            className=""
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label htmlFor="todo-0" className="font-style">
            {props.name}
          </label>
        </div>
        <button
          className="w-14 p-1 font-style text-sm hover:text-rose-600"
          onClick={() => props.deleteTask(props.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
