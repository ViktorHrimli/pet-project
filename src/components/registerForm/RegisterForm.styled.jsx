import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 320px;
  margin: 0 auto;
  padding: 42px 20px;

  border: 2px solid #84a4ce;
  box-shadow: 0px 2px 10px rgb(139 162 191);
  border-radius: 10px;
`;

export const PageTitle = styled.h1`
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
  @media screen and (min-width: 768px) {
    width: 618px;
  }
  /* @media screen and (min-width: 1280px) {
    margin: 0 auto;
    width: 618px;
  } */
  /* margin-bottom: 50px; */
`;

export const EntryFieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (max-width: 319px) {
    width: 100%;
  }
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 767px) {
    width: 448px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }

  /* & :last-child {
    margin-bottom: 40px;
  } */
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

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  width: 280px;
  height: 44px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #f59256;
  border: none;
  border-radius: 40px;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #f47d32;
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

export const WaveImg = styled.img`
  position: relative;
  bottom: 0px;

  max-width: 100%;
  height: auto;
`;

export const ErrorBox = styled.div`
  height: 12px;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  color: #8b0000;
`;
