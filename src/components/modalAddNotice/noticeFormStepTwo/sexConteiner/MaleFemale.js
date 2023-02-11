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
} from 'components/modalAddNotice/GlobalForm.styled';

import male from '../../../../images/svg/male.svg';
import famale from '../../../../images/svg/female.svg';

const MaleFemale = ({ touched, errors }) => {
  const [isEnterMale, setIsEnterMale] = useState(true);

  return (
    <NoticeConteinerSex>
      <LabelGlobal>The sex:</LabelGlobal>
      <NoticeSexRadioBtnConteiner>
        <div>
          <NoticeIconMale
            src={male}
            width="36"
            height="36"
            alt="icon"
            onClick={() => setIsEnterMale(true)}
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
              onClick={() => setIsEnterMale(true)}
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
            onClick={() => setIsEnterMale(false)}
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
              onClick={() => setIsEnterMale(false)}
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
