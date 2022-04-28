import { useDialog } from '../store/DialogContext';
import { useTodoList } from '../store/TodoListContext';
import Button from '../components/Button';

export default function Dialog() {
  const { dialog, cancel } = useDialog();
  const { Methods } = useTodoList();

  if (!dialog.show) return null;

  return (
    <>
      {dialog.show && (
        <div
          className="min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none"
          id="modal-id"
        >
          <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
          <div className="relative  mx-auto my-auto w-full max-w-lg rounded-xl bg-white p-5  shadow-lg ">
            <div className="flex-auto justify-center p-5 text-center">
              <h2 className="py-4 text-xl font-bold ">Do you sure delete?</h2>
            </div>
            <div className="space-x-4 text-center md:block">
              <Button text="cancel" onClick={cancel} />
              <Button text="delete" onClick={Methods.delete} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
