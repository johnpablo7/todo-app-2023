import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  return createPortal(
    <div className="bg-black/50 w-full flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
      {children}
    </div>,
    document.getElementById("modal")
  );
};
