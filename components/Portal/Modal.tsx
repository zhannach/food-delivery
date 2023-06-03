"use client"

const Modal = (props: {
  message: string;
}) => {
  return (
    <div
      id="popup-modal"
      className="fixed inset-0 w-200 overflow-y-auto overflow-x-hidden"
    >
      <div className="relative left-2/4 top-64 max-h-full w-4/5 max-w-md -translate-x-1/2">
        <div className="relative rounded-lg bg-slate-400  shadow">
          <div className="p-6 text-center">
            <h3 className="mb-5 text-2xl font-bold text-white dark:text-gray-400">
              {props.message}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
