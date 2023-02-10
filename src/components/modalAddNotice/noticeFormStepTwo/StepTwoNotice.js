import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  NoticeAddPhoto,
  AddComments,
  AddIconsPhoto,
  ImageSss,
  NoticeAddPhotoConteiner,
  AddStepTwoFormPets,
} from 'components/modalAddNotice/noticeFormStepTwo/StepTwoNotice.styled';

import {
  InputGlobal,
  LabelGlobal,
  TextGlobal,
  AddErrorMessageGlobal,
} from 'components/modalAddNotice/GlobalForm.styled';

import { ButtonFormDoneCancel } from 'components/modalAddNotice/buttonForm/ButtonForm';
import { MaleFemale } from 'components/modalAddNotice/noticeFormStepTwo/sexConteiner/MaleFemale';

const shemaMultipleModal = isPrice => {
  return Yup.object().shape({
    sex: Yup.string().required().equals(['male', 'female']),
    location: Yup.string().required(),
    comments: Yup.string()
      .required()
      .min(8, 'Should be at 8 characters')
      .max(120),
    price: isPrice ? Yup.number().required() : Yup.number().notRequired(),
  });
};

export const StepTwo = ({ step, state, setIsOpen, isUseSell }) => {
  const [file, setFile] = useState(null);
  const [isErrorFile, setIsErrorFile] = useState(true);

  const shema = shemaMultipleModal(isUseSell);

  const handleSubmit = (values, action) => {
    console.log(values);
    if (file) {
      state(prev => ({ ...prev, ...values, photo: file.avatar }));

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

      <Formik
        onSubmit={handleSubmit}
        initialValues={{ comments: '', sex: 'male', price: 0, location: '' }}
        validationSchema={shema}
      >
        {({ errors, touched, isValid }) => (
          <AddStepTwoFormPets>
            <MaleFemale touched={touched} errors={errors} />

            <div
              style={{ marginTop: '20px', display: 'grid', gridGap: '16px' }}
            >
              <div style={{ position: 'relative' }}>
                <LabelGlobal>
                  <LabelGlobal>Location:</LabelGlobal>
                  <InputGlobal
                    placeholder="Your pet location"
                    name="location"
                  />
                </LabelGlobal>
                {touched.location && errors.location && (
                  <AddErrorMessageGlobal>
                    {errors?.location}
                  </AddErrorMessageGlobal>
                )}
              </div>

              {isUseSell && (
                <div style={{ position: 'relative' }}>
                  <LabelGlobal>
                    <LabelGlobal>Price:</LabelGlobal>
                    <InputGlobal placeholder="Your pet price" name="price" />
                  </LabelGlobal>
                  {touched.price && errors.price && (
                    <AddErrorMessageGlobal>
                      {errors?.price}
                    </AddErrorMessageGlobal>
                  )}
                </div>
              )}
            </div>

            <NoticeAddPhotoConteiner>
              <LabelGlobal>Load the pet’s image</LabelGlobal>
              {!file ? (
                <NoticeAddPhoto>
                  <AddIconsPhoto />
                  <input
                    as="input"
                    type="file"
                    name="avatar"
                    hidden={true}
                    size={50000}
                    accept=".png, .jpg, .jpeg, .webp"
                    onChange={e => {
                      setFile({
                        url: URL.createObjectURL(e.target.files[0]),
                        avatar: e.target.files[0],
                      });
                    }}
                  />
                </NoticeAddPhoto>
              ) : (
                <ImageSss src={file.url} alt="pet" width="208" height="208" />
              )}

              {!isErrorFile && !file && (
                <div style={{ color: 'red' }}>{'Field reqiured!'}</div>
              )}
            </NoticeAddPhotoConteiner>

            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Comments
                <AddComments
                  as="textarea"
                  placeholder="Enter comments"
                  // rows={4}
                  name="comments"
                />
              </LabelGlobal>
              {touched.comments && errors.comments && (
                <AddErrorMessageGlobal>
                  {errors?.comments || 'Errors'}
                </AddErrorMessageGlobal>
              )}
            </div>

            <ButtonFormDoneCancel isValid={isValid} step={step} />
          </AddStepTwoFormPets>
        )}
      </Formik>
    </>
  );
};
