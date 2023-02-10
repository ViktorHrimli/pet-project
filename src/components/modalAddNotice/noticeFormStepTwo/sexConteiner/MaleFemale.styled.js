import styled from '@emotion/styled';

import { Field } from 'formik';

const NoticeConteinerSex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

const NoticeLableText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.normal};

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const NoticeSexRadioBtnConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    gap: 90px;
  }
`;

const NoticeIconFemale = styled.img`
  width: 36px;
  height: 40px;
  margin-right: 0;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;

    width: 36px;
    height: 60px;
  }
`;

const NoticeIconMale = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 0;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 23px;

    width: 54px;
    height: 54px;
  }
`;

const NoticeSexTextMale = styled(NoticeLableText)`
  color: ${({ isMale, theme }) => {
    return isMale ? theme.colors.primary : theme.colors.text;
  }};
`;

const NoticeSexTextFemale = styled(NoticeLableText)`
  color: ${({ isMale, theme }) => {
    return !isMale ? theme.colors.primary : theme.colors.text;
  }};
`;

const NoticeRadioSexBtn = styled(Field)`
  :checked {
    color: ${p => p.theme.colors.primary};
  }
`;

export {
  NoticeSexRadioBtnConteiner,
  NoticeConteinerSex,
  NoticeIconMale,
  NoticeIconFemale,
  NoticeRadioSexBtn,
  NoticeLableText,
  NoticeSexTextFemale,
  NoticeSexTextMale,
};
