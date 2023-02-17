import React, { useState } from 'react';

import {
  NoticeConteinerSex,
  NoticeIconFemale,
  NoticeIconMale,
  NoticeRadioSexBtn,
  NoticeSexRadioBtnConteiner,
  NoticeSexTextFemale,
  NoticeSexTextMale,
} from 'components/modalAddNotice/noticeFormStepTwo/sexConteiner/MaleFemale.styled';

import {
  LabelGlobal,
  AddErrorMessageGlobal,
  NoticeReqiredSymbol,
} from 'components/modalAddNotice/GlobalForm.styled';

import male from '../../../../images/svg/male.svg';
import famale from '../../../../images/svg/female.svg';

const MaleFemale = ({ touched, errors }) => {
  const [isEnterMale, setIsEnterMale] = useState(
    JSON.parse(localStorage.getItem('notice-sex') || false)
  );

  return (
    <NoticeConteinerSex>
      <LabelGlobal>
        <div>
          The sex<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
        </div>
      </LabelGlobal>
      <NoticeSexRadioBtnConteiner>
        <div>
          <NoticeIconMale
            src={male}
            width="36"
            height="36"
            alt="icon"
            onClick={() => {
              localStorage.setItem('notice-sex', JSON.stringify(false));
              setIsEnterMale(false);
            }}
          />

          <NoticeRadioSexBtn
            type="radio"
            name="sex"
            id="male"
            value="male"
            hidden={true}
          />
          <LabelGlobal htmlFor="male">
            <NoticeSexTextMale
              onClick={() => {
                localStorage.setItem('notice-sex', JSON.stringify(false));
                setIsEnterMale(false);
              }}
              isMale={isEnterMale}
            >
              Male
            </NoticeSexTextMale>
          </LabelGlobal>
        </div>
        <div>
          <NoticeIconFemale
            src={famale}
            width="36"
            height="36"
            alt="icon"
            onClick={() => {
              localStorage.setItem('notice-sex', JSON.stringify(true));
              setIsEnterMale(true);
            }}
          />
          <NoticeRadioSexBtn
            type="radio"
            name="sex"
            id="female"
            value="female"
            hidden={true}
          />
          <LabelGlobal htmlFor="female">
            <NoticeSexTextFemale
              onClick={() => {
                localStorage.setItem('notice-sex', JSON.stringify(true));
                setIsEnterMale(true);
              }}
              isMale={isEnterMale}
            >
              Female
            </NoticeSexTextFemale>
          </LabelGlobal>
        </div>
      </NoticeSexRadioBtnConteiner>
      {touched.sex && errors.sex && (
        <AddErrorMessageGlobal>{errors?.sex}</AddErrorMessageGlobal>
      )}
    </NoticeConteinerSex>
  );
};

export { MaleFemale };
