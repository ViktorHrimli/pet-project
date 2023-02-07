import React from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { ConteinerIconsClose } from './ModalLayout.styled';

import './styled.css';

ReactModal.setAppElement('#root');

export const ModalsLayout = ({ children, setIsOpen, isOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bodyModal"
      style={{
        overlay: {
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(17, 17, 17, 0.6)',
          padding: '20px',
          zIndex: 20,
        },
      }}
      contentLabel="Example Modal"
      aria={{ modal: 'true' }}
    >
      <ConteinerIconsClose>
        <AiOutlineClose size={20} onClick={closeModal} />
      </ConteinerIconsClose>

      {children}
    </ReactModal>
  );
};
