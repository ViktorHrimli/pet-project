import React, { useState } from 'react';

import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from 'components/petsData/styles/AddPet.styles';

import { ModalAddPet } from 'components/modalAddsPet/ModalAddPet';
import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';

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

      <ModalsLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalAddPet setIsOpen={setIsOpen} />
      </ModalsLayout>
    </AddButton>
  );
};
