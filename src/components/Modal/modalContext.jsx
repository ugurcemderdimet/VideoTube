import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, initModal, setModalContent, modalContent } = useModal();
  return (
    <Provider value={{ modal, initModal, setModalContent, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };