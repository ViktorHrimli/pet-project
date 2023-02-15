import React, { useEffect } from 'react';

import { FooterModalList } from 'components/footerModal/footerModalList/FooterModalList';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonCloseModal,
  CloseSvg,
} from 'components/footerModal/FooterModal.styled';

export default function FooterModal({ setOpenModal }) {
  const onClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      setOpenModal(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        document.body.style.overflow = '';
        setOpenModal(false);
      }
      if (event.currentTarget === event.target) {
        setOpenModal(false);
        document.body.style.overflow = '';
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [setOpenModal]);

  return (
    <Overlay onClick={onClickBackdrop}>
      <ModalContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalContent>
          <ButtonCloseModal
            onClick={() => {
              document.body.style.overflow = '';
              setOpenModal(false);
            }}
          >
            <CloseSvg />
          </ButtonCloseModal>

          <ModalTitle>Our TEAM</ModalTitle>
          <FooterModalList />
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
}
