import React, { useEffect } from 'react';

import { FooterModalList } from 'components/footerModal/footerModalList/FooterModalList';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  CloseSvg,
} from 'components/footerModal/FooterModal.styled';

export default function FooterModal({ setOpenModal }) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        setOpenModal(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [setOpenModal]);

  return (
    <Overlay
      onClick={() => {
        document.body.style.overflow = '';
        setOpenModal(false);
      }}
    >
      <ModalContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalContent>
          <CloseSvg
            onClick={() => {
              document.body.style.overflow = '';
              setOpenModal(false);
            }}
          />

          <ModalTitle>Our TEAM</ModalTitle>
          <FooterModalList />
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
}
