import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from 'components/addNoticeButton/AddNoticeButton.styled';

import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';
import { ModalAddPet } from 'components/modalAddsPet/ModalAddPet';

export const AddNoticeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
  );
};

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};