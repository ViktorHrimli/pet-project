import React from 'react';
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { ConteinerIconsClose, BackgroundModal } from './ModalLayout.styled';

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '280px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    borderRadius: '20px',
    backgroundColor: '#fff',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const ModalsLayout = ({ children, setIsOpen, isOpen }) => {
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        style={{ position: 'absolute', top: '166px', left: '50%' }}
      >
        Open Modal
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        onAfterOpen={'rgba(17, 17, 17, 0.6)'}
      >
        <ConteinerIconsClose>
          <AiOutlineClose size={20} onClick={closeModal} />
        </ConteinerIconsClose>

        {children}
      </ReactModal>
    </div>
  );
};
