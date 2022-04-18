import React, { useEffect, useRef } from 'react';
import { useTodo } from './TodoContext.jsx';
import { useModal, Modal } from './Modal.jsx';
import { SuccessButton, CancelButton } from './Button.jsx';
import Icon from './svg/index.js';
import clsx from 'clsx';

export default function TodoAddModal() {
  const { addTodo } = useTodo();
  const { isShow, toggleModal } = useModal({ initIsShow: false });

  return (
    <>
      <FormModal isShow={isShow} toggleModal={toggleModal} addTodo={addTodo} />
      <button
        className={clsx([
          'translate--x-1/2 fixed bottom-8 left-1/2 z-10 rounded-full bg-teal-600 p-4 text-white shadow transition-all hover:scale-125',
        ])}
        onClick={() => toggleModal(true)}
      >
        <Icon.Plus />
      </button>
    </>
  );
}

function FormModal({ isShow, toggleModal, addTodo }) {
  const formEl = useRef(null);
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal(false);
    const formData = new FormData(e.target);
    const task = formData.get('task');
    addTodo({ task });
    e.target.reset();
  };

  const onCancel = () => {
    toggleModal(false);
    formEl.current.reset();
  };

  useEffect(() => {
    if (isShow === true) {
      inputEl.current.focus();
    }
  }, [isShow]);

  return (
    <Modal isShow={isShow} toggleModal={toggleModal}>
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
    </Modal>
  );
}
