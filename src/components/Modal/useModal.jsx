import React from "react";

const useModal = () => {
  let [modal, setModal] = React.useState({});
  let [modalContent, setContent] = React.useState({ body: '...', backgroundImage: '' });

  let initModal = (val) => {
    setModal(val);
  };

  let setModalContent = (body = false, backgroundImage = '') => {
    setContent({ body, backgroundImage });
  };

  return { modal, initModal, setModalContent, modalContent };
};

export default useModal;
