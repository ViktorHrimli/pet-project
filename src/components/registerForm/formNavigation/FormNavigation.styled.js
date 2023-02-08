import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;

  border: 2px solid #f59256;

  border-radius: 40px;

  cursor: pointer;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #f47d32;
  }
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
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
  margin: 0;
  color: rgba(17, 17, 17, 0.6);
`;
export const LinkOnLogin = styled(NavLink)`
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  text-decoration-line: underline;
  color: #3091eb;
`;

export const Register1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  @media screen and (max-width: 497px) {
    width: 100%;
  }
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;

export const Register2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 497px) {
    width: 100%;
  }
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;
