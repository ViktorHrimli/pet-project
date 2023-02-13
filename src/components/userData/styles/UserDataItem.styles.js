import styled from '@emotion/styled';

export const InfoItem = styled.div`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
  letter-spacing: ${p => p.theme.letterSpacings.min};

  align-items: center;
  display: flex;
  width: 96px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.max};
  }
`;

export const Userlabel = styled.label`
  display: flex;

  align-items: center;
  @media screen and (min-width: 768px) {
  }
`;

export const Form = styled.form`
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const EditInputBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 50%;
  border: none;
  background-color: ${p => p.theme.colors.background};
  &:hover {
    background: #ffdec3;
    transition: 0.3s;
  }
  @media screen and (min-width: 768px) {
    & * {
    }
  }
  @media screen and (min-width: 1280px) {
    & * {
    }
  }
`;

export const EditInput = styled.input`
  margin-right: 0px;
  width: 159px;
  font-size: 12px;
  font-weight: 400;
  line-height: ${p => p.theme.lineHeights.min};
  align-items: center;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding-left: 12px;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 768px) {
    width: 216px;
    font-size: 18px;
    ${p => p.theme.lineHeights.max}
  }
`;

export const UserInfoWrapper = styled.div`
  margin-top: 32px;
`;
export const EditInputContainer = styled.div``;
export const TextInInput = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: ${p => p.theme.lineHeights.min};

  width: 159px;
  padding-left: 13px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 216px;
    margin-right: 24px;
    line-height: ${p => p.theme.lineHeights.max};
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Edit = styled.div`
  @media screen and (min-width: 768px) {
  }
`;
export const EditInputBtnSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 50%;
  border: none;
  background-color: ${p => p.theme.colors.background};

  &:hover {
    background: #ffdec3;
    transition: 0.3s;
  }
  @media screen and (min-width: 768px) {
    & * {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;
