import React from 'react';

import { FooterModalList } from 'components/footerModal/footerModalList/FooterModalList';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  CloseSvg,
} from 'components/footerModal/FooterModal.styled';

export default function FooterModal({ setOpenModal }) {
  // if (!open) return null;
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
