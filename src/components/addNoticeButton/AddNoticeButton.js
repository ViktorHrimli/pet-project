import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
  return (
    <AddButton>
      <Circle>
        <IconCross />
      </Circle>
      <ButtonName>Add pet</ButtonName>
    </AddButton>
  );
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
