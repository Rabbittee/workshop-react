import clsx from 'clsx';
import { useState } from 'react';

export function useModal({ initIsShow }) {
  const [isShow, setIsShow] = useState(initIsShow ?? false);

  const toggleModal = (forceState) => {
    setIsShow(forceState ?? !isShow);
  };

  return {
    isShow,
    toggleModal,
  };
}

export function Modal({ isShow, toggleModal, children }) {
  return (
    <div
      className={clsx([
        isShow ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        'bg-black bg-opacity-50 transition-all',
        'fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center px-4',
      ])}
      onClick={() => toggleModal(false)}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
