import styled from '@emotion/styled';

export const InfoItems = styled.div`
  padding-top: 70px;
  width: 100%;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  @media screen and (min-width: 768px) {
    padding-top: 35px;
  }
`;

export const InfoItem = styled.div`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  align-items: center;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.max};
  }
`;

export const Property = styled.p`
  min-width: 82px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 120px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Userlabel = styled.label`
display: flex;


`


export const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const EditInputBtn = styled.span`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fdf7f2;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  &:hover {
    background: #ffdec3;
    transition: 0.3s;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    & * {
      width: 20px;
      height: 20px;
    }
  }
`;



export const EditInput = styled.input`
  /* width: 100%; */
  max-width: 380px;
  margin-right: 10px;
  font-size: inherit;
  font-weight: 400;
  line-height: ${p => p.theme.lineHeights.max};
  align-items: center;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding-left: 12px;

  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const LogOut = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: end;
  @media screen and (min-width: 768px) {
    justify-content: start;
    font-size: 16px;
    margin-top: 33px;
  }
  & button {
    border: none;
    background-color: transparent;
    display: flex;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.max}%;
    letter-spacing: ${p => p.theme.letterSpacings.normal};
    color: rgba(17, 17, 17, 0.6);
    & img {
      margin-right: 8px;
    }
  }
`;
