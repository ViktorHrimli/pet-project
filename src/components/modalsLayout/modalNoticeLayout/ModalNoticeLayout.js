import React from 'react';
import ReactModal from 'react-modal';

import { ConteinerIconsClose, CrossIcon } from 'components/modalsLayout/modalNoticeLayout/ModalNoticeLayout.styled';

import 'components/modalsLayout/styled.css';

ReactModal.setAppElement('#root');

export const ModalNoticeLayout = ({ children, setIsOpenModalNotice, isOpenModalNotice }) => {
  const closeModalNotice = () => {
    setIsOpenModalNotice(false);
  };

  return (
    <ReactModal
      isOpen={isOpenModalNotice}
      onRequestClose={closeModalNotice}
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
      <ConteinerIconsClose onClick={closeModalNotice}>
        <CrossIcon />
      </ConteinerIconsClose>

      {children}
    </ReactModal>
  );
};
