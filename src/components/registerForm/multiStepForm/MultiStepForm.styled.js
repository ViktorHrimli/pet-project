import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WaveImg = styled.img`
  position: relative;
  bottom: 0px;

  max-width: 100%;
  height: auto;
`;
