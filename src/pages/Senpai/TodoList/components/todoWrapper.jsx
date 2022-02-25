import ButtonArea from "./buttonArea";

function TodoWrapper({
  dataList,
  setInputValue,
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
                onInput={e => setInputValue(e.target.value)}
              />
              ) : (
              <p>{text}</p>
            )}
            <ButtonArea
              id={id}
              isDone={isDone}
              isEdit={isEdit}
              deleteItem={deleteItem}
              toggleDataState={toggleDataState}
            />
          </li>
        )}
    </ul>
  )
}

export default TodoWrapper;