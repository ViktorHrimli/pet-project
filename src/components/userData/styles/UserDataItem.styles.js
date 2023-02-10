import styled from '@emotion/styled';

export const InfoItem = styled.div`
font-size: ${p => p.theme.fontSizes.xxxs};
font-weight: ${p => p.theme.fontWeights.medium};
line-height: ${p => p.theme.lineHeights.min};
letter-spacing: ${p => p.theme.letterSpacings.min}

  align-items: center;
  display: flex;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.max};
  }
`;

export const Userlabel = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (min-width: 768px) {

  }
`

export const Form = styled.form`

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
  max-width: 159px;
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

export const UserInfoWrapper = styled.div`

  margin-top: 32px;
`
export const EditInputContainer = styled.div`
margin-left: 25px;
`
