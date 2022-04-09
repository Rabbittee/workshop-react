import React, { useState, useEffect, useRef } from 'react';
import { useTodo } from './TodoContext.jsx';
import { SuccessButton, CancelButton } from './Button.jsx';
import Icon from './svg/index.js';
import clsx from 'clsx';

export default function AddModal() {
  const { addTodo } = useTodo();

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Modal isShown={isShown} setIsShown={setIsShown} addTodo={addTodo} />
      <button
        className={clsx([
          'translate--x-1/2 fixed bottom-8 left-1/2 z-10 rounded-full bg-teal-600 p-4 text-white shadow transition-all hover:scale-125',
        ])}
        onClick={() => setIsShown(true)}
      >
        <Icon.Plus />
      </button>
    </>
  );
}

function Modal({ isShown, setIsShown, addTodo }) {
  const formEl = useRef(null);
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsShown(false);
    const formData = new FormData(e.target);
    const task = formData.get('task');
    addTodo({ task });
    e.target.reset();
  };

  const onCancel = () => {
    setIsShown(false);
    formEl.current.reset();
  };

  useEffect(() => {
    if (isShown === true) {
      inputEl.current.focus();
    }
  }, [isShown]);

  return (
    <div
      className={clsx([
        isShown ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        'bg-black bg-opacity-50 transition-all',
        'fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center px-4',
      ])}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="flex flex-col gap-8" onSubmit={onSubmit} ref={formEl}>
          <div className="flex flex-col gap-4">
            <label htmlFor="task" className="text-xl">
              Add your next task.
            </label>
            <input
              type="text"
              id="task"
              name="task"
              ref={inputEl}
              className={clsx([
                'border-b border-b-teal-900 bg-teal-100 bg-opacity-30',
                'w-full py-2 px-4',
              ])}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <CancelButton type="button" onClick={onCancel} className={['!rounded-md !px-6 !py-2']}>
              CANCEL
            </CancelButton>
            <SuccessButton type="submit" className={['!rounded-md !px-6 !py-2']}>
              ADD TASK
            </SuccessButton>
          </div>
        </form>
      </div>
    </div>
  );
}
