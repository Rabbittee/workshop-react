import { Modal, useModal } from './Modal.jsx';
import { CancelButton, DangerButton, DangerBorderButton } from './Button.jsx';
import Icon from './svg/index.js';

export default function TodoDeleteModal({ confirmCallback }) {
  const { isShow, toggleModal } = useModal({ initIsShow: false });

  const onClickDeleteIcon = (e) => {
    e.stopPropagation();
    toggleModal(true);
  };

  const onClickCancel = () => {
    toggleModal(false);
  };

  const onClickDanger = () => {
    toggleModal(false);
    confirmCallback();
  };

  return (
    <>
      <DangerBorderButton type="button" onClick={onClickDeleteIcon}>
        <Icon.Trash />
      </DangerBorderButton>
      <Modal isShow={isShow} toggleModal={toggleModal}>
        <div className="flex flex-col gap-8">
          <h3 className="text-center text-3xl">Are you sure?</h3>
          <div className="flex max-w-sm justify-center gap-4">
            <div className="w-1/2">
              <CancelButton onClick={onClickCancel} className="w-full px-4 py-2">
                Cancel
              </CancelButton>
            </div>
            <div className="w-1/2">
              <DangerButton onClick={onClickDanger} className="w-full px-4 py-2">
                Yes!
              </DangerButton>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
