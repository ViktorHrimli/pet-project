import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddComments,
  AddStepTwoParagraph,
  AddStepTwoFormPets,
} from 'components/modalAddsPet/addFormStepTwo/AddFormStepTwo.styled';

import {
  AddErrorMessageGlobal,
  LabelGlobal,
  TextGlobal,
} from 'components/modalAddNotice/GlobalForm.styled';

import { ButtonFormDoneCancel } from 'components/modalAddNotice/buttonForm/ButtonForm';
import { PhotoConteiner } from 'components/modalAddsPet/photoConteiner/PhotoConteiner';

const shamaStepTwo = Yup.object().shape({
  comments: Yup.string()
    .required('Required field!')
    .min(8, 'Should be at 8 least characters')
    .max(120),
});

const StepTwo = ({ step, state, setIsOpen }) => {
  const [file, setFile] = useState(null);
  const [isErrorFile, setIsErrorFile] = useState(true);

  const handleSubmit = (values, action) => {
    if (file) {
      state(prev => ({ ...prev, ...values, photo: file.avatar }));

      localStorage.removeItem('stepTwo');

      action.resetForm();
      setIsErrorFile(true);
      setIsOpen(false);
    } else {
      setIsErrorFile(false);
    }
  };

  return (
    <>
      <TextGlobal>Add pet</TextGlobal>

      <AddStepTwoParagraph>Add photo and some comments</AddStepTwoParagraph>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          comments: JSON.parse(localStorage.getItem('stepTwo')) || '',
        }}
        validationSchema={shamaStepTwo}
      >
        {({ errors, touched }) => (
          <AddStepTwoFormPets>
            <PhotoConteiner
              file={file}
              isErrorFile={isErrorFile}
              setFile={setFile}
            />

            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Comments
                <AddComments
                  as="textarea"
                  placeholder="Enter comments"
                  rows={4}
                  onBlur={e => {
                    localStorage.setItem(
                      'stepTwo',
                      JSON.stringify(e.target.value)
                    );
                  }}
                  name="comments"
                />
              </LabelGlobal>
              {touched.comments && errors.comments && (
                <AddErrorMessageGlobal>
                  {errors?.comments || 'Errors'}
                </AddErrorMessageGlobal>
              )}
            </div>

            <ButtonFormDoneCancel step={step} />
          </AddStepTwoFormPets>
        )}
      </Formik>
    </>
  );
};

export { StepTwo };
