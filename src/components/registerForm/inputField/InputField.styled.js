import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputArea = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 0 10px 0 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    height: 52px;
  }

  &:focus {
    border-color: '#f59256';
  }
  &::placeholder {
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
`;

export const Message = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  color: #8b0000;
`;
