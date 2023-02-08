import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import wave from '../../images/background/part-1.png';

export const PageTitle = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #111111;
`;

export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* width: 100%; */
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const EntryFieldLabel = styled.label`
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
  /* margin-bottom: 40px; */
  width: 100%;

  @media screen and (max-width: 767px) {
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;

export const InputArea = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;
  background-color: #fdf7f2;

  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;

  font-size: 14px;

  &:focus {
    border: 2px solid rgba(245, 146, 86, 0.5);
  }
  &::placeholder {
    font-size: 12px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  /* margin-bottom: 50px; */
`;
export const TextForm = styled.p`
  font-size: 12px;
  font-weight: 400;

  color: rgba(17, 17, 17, 0.6);
`;
export const LinkOnLogin = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  margin-bottom: 5px;
  color: #3091eb;
`;

export const ErrorBox = styled.div`
  height: 12px;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  color: #8b0000;
`;

export const BgImageBox = styled.div`
  /* display: flex;

  max-width: 100%;
  height: auto; */
  /* background-image: url(${wave}); */
`;
export const WaveImg = styled.img`
  /* position: relative; */
  bottom: 0px;
  max-width: 100hv;
  height: 100hv;
  object-fit: cover;
`;

export const ButtonIconPass = styled.button`
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: 20px;
  background-color: #fdf7f2;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover *,
  &:focus * {
    fill: #f59256;
  }
`;

export const ButtonIconConfirmPass = styled.button`
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  padding: 5px;

  border: none;
  border-radius: 20px;
  background-color: #fdf7f2;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover *,
  &:focus * {
    fill: #f59256;
  }
  /* @media screen and (min-width: 1280px) {
    top: 2px;
    right: 5px;
  } */
`;
