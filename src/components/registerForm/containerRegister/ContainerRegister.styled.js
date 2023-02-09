import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 319px) {
    padding: 0 10px;
  }
  @media screen and (min-width: 320px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
    padding-top: 60px;
    padding-right: 80px;
    padding-left: 80px;
    padding-bottom: 40px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.form};
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    padding: 60px 80px;
  }
`;
