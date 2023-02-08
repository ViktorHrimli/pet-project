import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Form, Field } from 'formik';

import bgLoginDesk from '../../images/login/bgLoginDesk.png';
import bgLoginTab from '../../images/login/bgLoginTab.png';
import bgLoginMob from '../../images/login/bgLoginMob.png';

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
    fill: rgba(17, 17, 17, 0.6);
  }
`;

export const AuthSection = styled.section`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bgLoginMob});
  background-position: center bottom;
  background-size: contain;
  padding: 122px 0 100px;
  @media (min-width: 768px) {
    padding-top: 210px;
    padding-bottom: 250px;
    background-image: url(${bgLoginTab});
    min-height: calc(100vh - 75px);
  }
  @media screen and (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 100px;
    background-image: url(${bgLoginDesk});
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -15px;
  left: 32px;
  margin: 0px;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;
`;

export const Label = styled.label`
  position: relative;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 608px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 618px;
    padding: 60px 80px;
  }
`;

export const TitleAuth = styled.h2`
  text-align: center;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px 10px 13px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;
  /* color: rgba(17, 17, 17, 0.6); */
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  &:focus {
    border-color: '#f59256';
  }
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  text-align: center;
  & span {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const FormLink = styled(Link)`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #3091eb;
  &:visited {
    color: rgba(85, 26, 139);
  }
`;
