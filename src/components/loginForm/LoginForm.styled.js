import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Form, Field } from 'formik';

import bgLoginDesk from '../../images/login/bgLoginDesk.png';
import bgLoginTab from '../../images/login/bgLoginTab.png';
import bgLoginMob from '../../images/login/bgLoginMob.png';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Icon = styled.span`
  position: absolute;
  top: 58%;
  right: 9px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  color: ${p => p.theme.colors.muted};
  cursor: pointer;
  &:hover *,
  &:focus * {
    fill: ${p => p.theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    top: 49%;
    right: 22px;
  }

  svg {
    width: 16px;
    height: 16px;
    @media screen and (min-width: 768px) {
      width: 25px;
      height: 25px;
    }
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
    /* min-height: 100vh; */
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
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    width: 608px;
    background: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.form};
    border-radius: ${p => p.theme.radii.big};
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
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.text};
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 0 14px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.inputAuthForm};
  border-radius: ${p => p.theme.radii.big};
  outline: none;

  transition-property: border-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: ${p => p.theme.lineHeights.max};
    height: 52px;
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.medium};
    border-color: ${p => p.theme.colors.primary};
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    ::placeholder {
      color: ${p => p.theme.colors.focus};
    }
  }
  &::placeholder {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.normal};
    letter-spacing: ${p => p.theme.letterSpacings.normal};
    color: ${p => p.theme.colors.muted};
    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.ms};
      line-height: ${p => p.theme.lineHeights.max};
    }
  }

  &:focus {
    ::placeholder {
      color: ${p => p.theme.colors.white};
    }
  }
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  text-align: center;
  & span {
    font-family: 'Manrope';
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxxs};
    line-height: ${p => p.theme.lineHeights.min};
    letter-spacing: ${p => p.theme.letterSpacings.normal};
    color: ${p => p.theme.colors.muted};
  }
`;

export const FormLink = styled(Link)`
  font-family: 'Manrope';
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: ${p => p.theme.lineHeights.min};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  text-decoration-line: underline;
  color: ${p => p.theme.colors.secondary};
  &:hover {
    color: ${p => p.theme.colors.focus};
  }
  /* &:visited {
    color: rgba(85, 26, 139);
  } */
`;

export const customToast = {
  position: 'top-right',
  autoClose: 5000,
  pauseOnHover: true,
};
