import ButtonArea from "./buttonArea";
import TodoForm from "./todoForm";

function TodoWrapper({
  dataList,
  updateTodo,
  toggleDataState,
  deleteItem
}) {
  return (
    <ul className="flex flex-col gap-3">
      {dataList.map(({id, isDone, isEdit, text}) => 
          <li
            className="flex flex-raw justify-center items-center gap-3 border-b-2 border-blue-400 border-dashed"
            key={`list_${id}`}
          >
            <input
              type="checkbox"
              defaultChecked={isDone}
              onChange={() => toggleDataState(id, 'isDone')}
            />
            {isEdit ? (
              <input
                type="text"
                value={text}
              />
              ) : (
              <p>{text}</p>
            )}
            <ButtonArea
              id={id}
              isDone={isDone}
              isEdit={isEdit}
              text={text}
              deleteItem={deleteItem}
              toggleDataState={toggleDataState}
              updateTodo={updateTodo}
            />
          </li>
        )}
    </ul>
  )
}

export default TodoWrapper;