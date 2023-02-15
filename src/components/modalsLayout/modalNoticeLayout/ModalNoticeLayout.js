import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  ModalBox,
  StyledBtn,
  Icon
} from 'components/modalsLayout/modalNoticeLayout/ModalNoticeLayout.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalNoticeLayout = ({ onClose, children }) => {
  
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };

  useEffect(() => {
    const onKeydown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);
  
  return createPortal(
    <Backdrop onClick={onClickBackdrop}>
      <ModalBox>
        <StyledBtn type="button" onClick={() => {
          document.body.style.overflow = "";
          onClose(false)}}>
          <Icon />
        </StyledBtn>
        {children}
      </ModalBox>
    </Backdrop>,
    modalRoot
  );
};

export default ModalNoticeLayout;