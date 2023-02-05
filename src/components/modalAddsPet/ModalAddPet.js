import React, { useState } from 'react';
import { Formik } from 'formik';

import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';
import {
  AddTextPets,
  AddFormPets,
  AddLablePets,
  AddInputPets,
} from './ModalAddPet.styled';

export const ModalAddPet = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <ModalsLayout setIsOpen={setisOpen} isOpen={isOpen}>
        <AddTextPets>Add pet</AddTextPets>
        <Formik>
          <AddFormPets>
            <AddLablePets>
              Name pet
              <AddInputPets placeholder="Type name pet" type="text" />
            </AddLablePets>

            <AddLablePets>
              Date of birth
              <AddInputPets placeholder="Type date of birth" type="text" />
            </AddLablePets>

            <AddLablePets>
              Breed
              <AddInputPets placeholder="Type breed" type="text" />
            </AddLablePets>
          </AddFormPets>
        </Formik>
      </ModalsLayout>
    </>
  );
};
