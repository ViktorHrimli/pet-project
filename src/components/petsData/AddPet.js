import React, { useState } from 'react';

import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from 'components/petsData/styles/AddPet.styles';

export const AddPetButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AddButton>
      <Circle>
        <IconCross />
      </Circle>
      <ButtonName onClick={() => setIsOpen(true)} type="button">
        Add pet
      </ButtonName>
    </AddButton>
  );
};
