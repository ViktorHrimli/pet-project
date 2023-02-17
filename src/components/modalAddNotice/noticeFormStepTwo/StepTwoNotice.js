import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddComments,
  NoticeAddPhotoConteiner,
  AddStepTwoFormPets,
} from 'components/modalAddNotice/noticeFormStepTwo/StepTwoNotice.styled';

import {
  InputGlobal,
  LabelGlobal,
  TextGlobal,
  AddErrorMessageGlobal,
  NoticeReqiredSymbol,
} from 'components/modalAddNotice/GlobalForm.styled';

import { ButtonFormDoneCancel } from 'components/modalAddNotice/buttonForm/ButtonForm';
import { MaleFemale } from 'components/modalAddNotice/noticeFormStepTwo/sexConteiner/MaleFemale';
import { PhotoConteinerNotice } from 'components/modalAddNotice/photoFormConteinerNotice/PhotoConteinerNotice';

const pricePattern = /^[1-9][0-9]*$/;

// const getBase64StringFromDataURL = dataURL =>
//   dataURL.replace('data:', '').replace(/^.+,/, '');

// const getBase64Img = base => {
//   return `data:image/png;base64,${base}`;
// };

const shemaMultipleModal = isPrice => {
  return Yup.object().shape({
    sex: Yup.string().required('Field required!').equals(['male', 'female']),
    location: Yup.string()
      .matches(
        /^[a-zA-Z]+[,][ ][a-zA-Z]+$/,
        'Location should be /Region, City/'
      )
      .required('Field required!'),
    comments: Yup.string()
      .required('Field required!')
      .min(8, 'Should be at 8 characters')
      .max(120),
    price: isPrice
      ? Yup.string()
          .matches(pricePattern, 'Price must be more 0!')
          .required('Field required!')
      : Yup.string().matches(pricePattern, 'Only numbers').notRequired(),
  });
};

export const StepTwo = ({ step, state, setIsOpen, isUseSell }) => {
  const [file, setFile] = useState(null);
  const [isErrorFile, setIsErrorFile] = useState(false);

  const [localeState] = useState({
    location: JSON.parse(localStorage.getItem('notice-location')) || '',
    price: JSON.parse(localStorage.getItem('notice-price')) || '',
    comments: JSON.parse(localStorage.getItem('notice-comments')) || '',
    sex:
      JSON.parse(localStorage.getItem('notice-sex')) === true
        ? 'female'
        : 'male',
  });

  const shema = shemaMultipleModal(isUseSell);

  if (JSON.parse(localStorage.getItem('url')) !== null) {
    // const str = JSON.parse(localStorage.getItem('url')).slice(5);
    // fetch(str)
    //   .then(res => res.blob())
    //   .then(blob => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       const base64 = getBase64StringFromDataURL(reader.result);
    //       // const img = getBase64Img(base64);
    //     };
    //     reader.readAsDataURL(blob);
    //   });
  }

  const handleSubmit = (values, action) => {
    if (file) {
      state(prev => ({ ...prev, ...values, photo: file.avatar }));

      localStorage.removeItem('notice-location');
      localStorage.removeItem('notice-price');
      localStorage.removeItem('notice-comments');
      localStorage.removeItem('notice-sex');
      localStorage.removeItem('prev');

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

      <Formik
        onSubmit={handleSubmit}
        initialValues={localeState}
        validationSchema={shema}
      >
        {({ errors, touched }) => (
          <AddStepTwoFormPets>
            <MaleFemale touched={touched} errors={errors} />

            <div
              style={{ marginTop: '20px', display: 'grid', gridGap: '16px' }}
            >
              <div style={{ position: 'relative' }}>
                <LabelGlobal>
                  <LabelGlobal>
                    <div>
                      Location<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                    </div>
                  </LabelGlobal>
                  <InputGlobal
                    placeholder="Your pet location"
                    name="location"
                    onBlur={e => {
                      localStorage.setItem(
                        'notice-location',
                        JSON.stringify(e.target.value)
                      );
                    }}
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
                    <LabelGlobal>
                      <div>
                        Price<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                      </div>
                    </LabelGlobal>
                    <InputGlobal
                      placeholder="Your pet price"
                      name="price"
                      onBlur={e => {
                        localStorage.setItem(
                          'notice-price',
                          JSON.stringify(e.target.value)
                        );
                      }}
                    />
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
              <LabelGlobal>
                <div>
                  Load the pet’s image
                  <NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>
              </LabelGlobal>

              <PhotoConteinerNotice
                file={file}
                isErrorFile={isErrorFile}
                setFile={setFile}
              />
            </NoticeAddPhotoConteiner>

            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                <div>
                  Comments<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

                <AddComments
                  as="textarea"
                  placeholder="Enter comments"
                  name="comments"
                  onBlur={e => {
                    localStorage.setItem(
                      'notice-comments',
                      JSON.stringify(e.target.value)
                    );
                  }}
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
