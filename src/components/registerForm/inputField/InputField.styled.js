import styled from "@emotion/styled";
import { Field } from "formik";

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
