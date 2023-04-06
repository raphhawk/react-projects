import { useGlobalContext } from "./context";
import { RxCross2 } from "react-icons/rx";

const Modal = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="text-brown-700 bg-white w-1/2 h-80 text-center flex items-center rounded-md">
        <button
          type="button"
          onClick={closeModal}
          className="fixed right-96 top-60 text-2xl text-white bg-red-500 p-1 rounded-md hover:bg-red-600 "
        >
          <RxCross2 />
        </button>
        <p className="mx-auto text-2xl text-brown-700 font-bold">
          Modal Content
        </p>
      </div>
    </div>
  );
};

export default Modal;
