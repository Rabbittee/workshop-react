import Button from './Button';
function Dialog({ cancel, confirm }) {
  return (
    <div
      className="min-w-screen animated fadeIn faster fixed  inset-0  left-0 top-0 z-50 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none focus:outline-none"
      id="modal-id"
    >
      <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div className="relative  mx-auto my-auto w-full max-w-lg rounded-xl bg-white p-5  shadow-lg ">
        <>
          <div className="flex-auto justify-center p-5 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto flex h-16 w-16 items-center text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="py-4 text-xl font-bold ">確定刪除嗎?</h2>
          </div>
          <div className="space-x-4 text-center md:block">
            <Button
              fn={cancel}
              message="Cancel"
              className="mb-2 rounded-full border bg-white px-5 py-2 text-sm font-medium tracking-wider shadow-sm hover:bg-gray-100 hover:shadow-lg md:mb-0"
            />
            <Button
              fn={confirm}
              message="Delete"
              className="mb-2 rounded-full border border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider shadow-sm hover:bg-red-600 hover:shadow-lg md:mb-0"
            />
          </div>
        </>
      </div>
    </div>
  );
}

export default Dialog;
