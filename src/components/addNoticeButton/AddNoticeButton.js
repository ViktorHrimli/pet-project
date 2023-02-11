import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from 'components/addNoticeButton/AddNoticeButton.styled';

import { ModalAddNotice } from 'components/modalAddNotice/ModalAddNotice';
// import { ModalAddPet } from 'components/modalAddsPet/ModalAddPet';
import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';

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
        {/* <ModalAddPet setIsOpen={setIsOpen} /> */}
        <ModalAddNotice setIsOpen={setIsOpen} />
      </ModalsLayout>
    </AddButton>
  );
};

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};