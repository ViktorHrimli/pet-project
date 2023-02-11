import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
  Wrapper
} from 'components/addNoticeButton/AddNoticeButton.styled';

import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';
import { ModalAddPet } from 'components/modalAddsPet/ModalAddPet';

export const AddNoticeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
    <AddButton>
      <Circle>
        <IconCross />
      </Circle>
      <ButtonName onClick={() => setIsOpen(true)} type="button">
        Add pet
      </ButtonName>

      <ModalsLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalAddPet setIsOpen={setIsOpen} />
      </ModalsLayout>
      </AddButton>
      </Wrapper>
  );
};

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};