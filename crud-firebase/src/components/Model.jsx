import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="z-50 m-auto relative min-h-[200px] max-w-[80%] bg-white p-4 ">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl self-end cursor-pointer "
              />
            </div>
            {children}
          </div>

          <div
            onClick={onClose}
            className="backdrop-blur z-40 h-screen w-screen absolute top-0"
          />
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
