import React from 'react';
import { FooterModalList } from 'components/footerModal/footerModalList/FooterModalList';
import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  CloseSvg,
} from 'components/footerModal/FooterModal.styled';

export default function FooterModal({ open, onClose }) {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalContent>
          <CloseSvg onClick={onClose} />

          <ModalTitle>Our TEAM</ModalTitle>
          <FooterModalList />
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
}
