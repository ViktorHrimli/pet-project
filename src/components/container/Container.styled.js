import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 319px) {
    padding: 0 10px;
  }
  @media screen and (min-width: 320px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
