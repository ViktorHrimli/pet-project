import styled from '@emotion/styled';

export const Container = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  border: 2px solid #84a4ce;
  box-shadow: 0px 2px 10px rgb(139 162 191);
  border-radius: 10px;

  @media screen and (max-width: 319px) {
    padding: 100px 10px;
  }
  @media screen and (min-width: 320px) {
    padding: 100px 20px;
  }
  @media screen and (min-width: 768px) {
    margin: 0 80px;
    padding-top: 60px;
    padding-right: 80px;
    padding-left: 80px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 331px;
    padding: 0 16px;
  }
`;
