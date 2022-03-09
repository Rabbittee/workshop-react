import Button from './Button';
function Dialog({ cancel, confirm, message }) {
  return (
    <div
      className="min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none"
      id="modal-id"
    >
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div className="relative  mx-auto my-auto w-full max-w-lg rounded-xl bg-white p-5  shadow-lg ">
        <>
          <div className="flex-auto justify-center p-5 text-center">
            <h2 className="py-4 text-xl font-bold ">{message}</h2>
          </div>
          <div className="space-x-4 text-center md:block">
            <Button
              fn={cancel}
              message="Cancel"
              className="mb-2 rounded-full border bg-white px-5 py-2 text-sm font-medium tracking-wider shadow-sm hover:bg-gray-100 hover:shadow-lg md:mb-0"
            />
            {confirm && (
              <Button
                fn={confirm}
                message="Delete"
                className="mb-2 rounded-full border border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider shadow-sm hover:bg-red-600 hover:shadow-lg md:mb-0"
              />
            )}
          </div>
        </>
      </div>
    </div>
  );
}

export default Dialog;
