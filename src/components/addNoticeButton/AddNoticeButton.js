import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from 'hooks/useAuth';
import PropTypes from 'prop-types';

import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
  Wrapper,
} from 'components/addNoticeButton/AddNoticeButton.styled';

import { ModalAddNotice } from 'components/modalAddNotice/ModalAddNotice';
import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';

export const AddNoticeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();

  const showErrorRegister = () => {
    toast.error(
      'Only registered users can add on our site, so first log in or register.',
      {
        position: 'top-center',
      }
    );
  };

  return (
    <>
      <Wrapper>
        <AddButton
          type="button"
          onClick={() => (token ? setIsOpen(true) : showErrorRegister())}
        >
          <Circle>
            <IconCross />
          </Circle>
          <ButtonName>Add pet</ButtonName>
        </AddButton>
        <ModalsLayout isOpen={isOpen} setIsOpen={setIsOpen}>
          <ModalAddNotice setIsOpen={setIsOpen} />
        </ModalsLayout>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};
