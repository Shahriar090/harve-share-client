import { useContext, useRef } from "react";

import { createContext } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

import cn from "../utils/cn";
// modal context
const ModalContext = createContext(null);
const Modal = ({ isModalOpen, onClose, children }) => {
  // creating modal container ref
  const containerRef = useRef(null);

  //   to close the modal when click the outside of the modal container

  const handleOutsideClose = (e) => {
    if (!containerRef.current?.contains(e.target)) {
      onClose();
    }
  };

  //   I am using the portal to avoid rendering the modal inside the DOM

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        onClick={handleOutsideClose}
        className={cn(
          "fixed flex items-center justify-center inset-0 bg-gray-700/70 invisible z-[999]",
          { visible: isModalOpen }
        )}
      >
        {/* modal container */}
        <div
          ref={containerRef}
          className="bg-[#151515] w-full max-w-2xl rounded-sm p-5"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal")
  );
};

// modal close button

const CloseButton = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button className="" onClick={onClose}>
      {children ? (
        children
      ) : (
        <IoClose className="text-4xl  text-[#FF5D56] h-8 w-8  absolute top-0 right-0 border border-neutral-600 rounded-full p-1" />
      )}
    </button>
  );
};
const Header = ({ children }) => {
  return <div className=" w-full  relative">{children}</div>;
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;
