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
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bodyModal"
        style={{
          overlay: {
            position: 'absolute',
            width: '100vw',
            height: '130vh',
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
    </>
  );
};
