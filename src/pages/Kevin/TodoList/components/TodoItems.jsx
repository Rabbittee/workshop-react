import React, { useState } from 'react';
import { useTodo } from './TodoContext.jsx';
import { SuccessBorderButton } from './Button.jsx';
import TodoDeleteModal from './TodoDeleteModal.jsx';
import Icon from './svg/index.js';
import { formatTimestamp } from '../js/util.js';
import clsx from 'clsx';

export default function TodoList() {
  const { filteredTodoItems, editTodo, removeTodo } = useTodo();
  const items = filteredTodoItems() || [];

  return (
    <div className="divide-y divide-slate-500">
      {items.map(({ id, task, isCompleted, createAt, updateAt }) => (
        <TodoItem
          id={id}
          task={task}
          isChecked={isCompleted}
          key={`todo-item-${id}`}
          editTodo={editTodo}
          removeTodo={removeTodo}
          createAt={createAt}
          updateAt={updateAt}
        />
      ))}
    </div>
  );
}

function TodoItem({ id, task, isChecked = false, createAt, updateAt, editTodo, removeTodo }) {
  const itemId = `todo-item-${id}`;

  const [inputCheck, setInputCheck] = useState(isChecked);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditTodo = ({ newTask, isCompleted }) => {
    return editTodo(id, {
      task: newTask || task,
      isCompleted: isCompleted ?? isChecked,
    });
  };

  const toggleCheck = () => {
    setInputCheck(!inputCheck);
    handleEditTodo({ isCompleted: !inputCheck });
  };

  const onChange = (e) => {
    e.stopPropagation();
    toggleCheck();
  };

  const onClickTodoItem = (e) => {
    e.stopPropagation();
    if (isEdit === true) return;
    toggleCheck();
  };

  const onClickEditBtn = (e) => {
    e.stopPropagation();
    setIsEdit(true);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const editTask = formData.get('edit-task');
    if (!!editTask === true) {
      handleEditTodo({ newTask: editTask });
      setIsEdit(false);
    }
  };

  const formatTime = (timestamp) => {
    return formatTimestamp(timestamp) ?? `No data`;
  };

  return (
    <div className="cursor-pointer py-4 px-4 hover:bg-teal-50 hover:bg-opacity-10">
      {isEdit ? (
        <form className="flex items-center justify-between gap-4" onSubmit={onSubmitForm}>
          <div className="flex w-full">
            <input
              type="text"
              id="edit-task"
              name="edit-task"
              defaultValue={task}
              className="w-full rounded bg-slate-500 p-2 text-white"
              placeholder="Edit your task here..."
              required
            />
          </div>
          <div className="flex">
            <SuccessBorderButton type="submit">
              <Icon.Check />
            </SuccessBorderButton>
          </div>
        </form>
      ) : (
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          onClick={onClickTodoItem}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={onChange}
              id={itemId}
              checked={inputCheck}
              name={itemId}
              className="pointer-events-none"
            />
            <label
              className={clsx([
                inputCheck && 'text-slate-400 line-through',
                'pointer-events-none text-xl text-white',
              ])}
              htmlFor={itemId}
            >
              {task}
            </label>
          </div>
          <div className="flex items-center gap-4">
            <SuccessBorderButton
              onClick={onClickEditBtn}
              type="button"
              className="bg-teal-600 text-white hover:bg-teal-500"
            >
              <Icon.Edit />
            </SuccessBorderButton>
            <TodoDeleteModal confirmCallback={() => removeTodo(id)} />
          </div>
          <div className="flex w-full flex-col gap-1 pl-7 text-sm text-slate-400 md:flex-row md:gap-4">
            <p>Create at: {formatTime(createAt)}</p>
            <p>Update at: {formatTime(updateAt)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
