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
  NoticeReqiredSymbol,
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
  const localStorageObj = {
    url: window.handleMyObject
      ? URL.createObjectURL(window.handleMyObject)
      : null,
    avatar: window.handleMyObject,
  };

  const [file, setFile] = useState(
    window.handleMyObject ? localStorageObj : null
  );

  const [isErrorFile, setIsErrorFile] = useState(false);

  const handleSubmit = (values, action) => {
    if (file) {
      state(prev => ({ ...prev, ...values, photo: file.avatar }));

      localStorage.removeItem('stepTwo');

      action.resetForm();
      setIsErrorFile(false);
      setIsOpen(false);
    } else {
      setIsErrorFile(true);
    }
  };

  return (
    <>
      <TextGlobal>Add pet</TextGlobal>

      <AddStepTwoParagraph>
        Add photo and some comments
        <NoticeReqiredSymbol>*</NoticeReqiredSymbol>
      </AddStepTwoParagraph>

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
                <div>
                  Comments<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

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

            <ButtonFormDoneCancel step={step} setIsErrorFile={setIsErrorFile} />
          </AddStepTwoFormPets>
        )}
      </Formik>
    </>
  );
};

export { StepTwo };
