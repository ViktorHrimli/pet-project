import styled from '@emotion/styled';
import { Form } from 'formik';

export const PageTitle = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.max};
    font-weight: ${p => p.theme.fontWeights.medium};
  }
`;

export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280) {
    width: 458px;
  }
`;

export const EntryFieldLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const LabelPass = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const LabelConfirmPass = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const LabelPhone = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
`;
export const TextForm = styled.p`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.muted};
`;
export const LinkOnLogin = styled.span`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-left: 5px;
  margin-bottom: 5px;
  color: ${p => p.theme.colors.secondary};
`;

export const ButtonIconPass = styled.button`
  position: absolute;
  top: 3px;
  right: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};

  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    top: 8px;
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

  &:hover *,
  &:focus * {
    fill: ${p => p.theme.colors.primary};
  }
`;

export const ButtonIconConfirmPass = styled.button`
  position: absolute;
  top: 3px;
  right: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};

  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    top: 8px;
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

  &:hover *,
  &:focus * {
    fill: ${p => p.theme.colors.primary};
  }
`;
