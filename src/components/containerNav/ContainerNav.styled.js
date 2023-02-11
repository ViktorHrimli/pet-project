import styled from '@emotion/styled';

export const ContainerNavEl = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;
