"use client";

const Modal = (props: { message: string[]; isOpen: boolean }) => {
  return (
    <div id="popup-modal" className="fixed inset-0 w-200">
      <div
        className={`${
          props.isOpen ? "animate" : ""
        } relative  left-2/4 top-64 max-h-full w-4/5 max-w-md -translate-x-1/2 duration-200`}
      >
        <div className="relative rounded-2xl bg-slate-200 shadow  border-slate-200 border-4">
          <div className="p-6 text-center rounded-2xl border-white border-4 ">
            <h3 className="mb-5 text-2xl font-bold text-black dark:text-gray-400">
              {props.message.map((el, id) => (
                <p key={id}>{el}</p>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
