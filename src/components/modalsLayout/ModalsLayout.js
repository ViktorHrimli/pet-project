import React from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import {
  ConteinerIconsClose,
  ModalBodyWrapper,
} from 'components/modalsLayout/ModalLayout.styled';

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
            position: 'fixed',
            overflow: 'auto',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(17, 17, 17, 0.6)',
            zIndex: 20,
          },
        }}
        contentLabel="Example Modal"
        aria={{ modal: 'true' }}
      >
        <ModalBodyWrapper>
          <ConteinerIconsClose>
            <AiOutlineClose size={20} onClick={closeModal} />
          </ConteinerIconsClose>
          {children}
        </ModalBodyWrapper>
      </ReactModal>
    </>
  );
};
