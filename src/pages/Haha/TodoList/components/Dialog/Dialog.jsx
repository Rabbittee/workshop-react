import Button from '../Button';

function Dialog({ cancel, confirm, message }) {
  return (
    <div className="min-w-screen dialog-box">
      <div className="dialog-content relative">
        <div className="dialog-title">
          <h2 className="py-4 text-xl">{message}</h2>
        </div>
        <div className="space-x-4 text-center md:block">
          <Button
            onClick={cancel}
            message="Cancel"
            className="dialog-button bg-white text-gray-600 hover:bg-gray-100"
          />
          {confirm && (
            <Button
              onClick={confirm}
              message="Delete"
              className="dialog-button border-red-500 bg-red-500 hover:bg-red-600"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
