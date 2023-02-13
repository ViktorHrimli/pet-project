import React, { useState } from 'react';
import { ModalAddPet } from 'components/modalAddsPet/ModalAddPet';
import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';
import {
  AddButton,
  IconCross,
  ButtonName,
  Circle,
} from 'components/petsData/styles/AddPet.styles';

export const AddPetButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AddButton onClick={() => setIsOpen(true)} type="button">
      <Circle>
        <IconCross />
      </Circle>
      <ButtonName>Add pet</ButtonName>
      <ModalsLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalAddPet setIsOpen={setIsOpen} />
      </ModalsLayout>
    </AddButton>
  );
};