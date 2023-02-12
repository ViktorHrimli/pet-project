import styled from '@emotion/styled';


export const FooterContainer = styled.footer`
  
  padding: 20px 0;
  width: 100%;
  /* == base case =  */
  /* background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%); */

  /* == back case == */
  /* background: linear-gradient(90deg, #ffdf48 0%, #ff634e 105.44%); */

  /* == top down == */
  /* background: linear-gradient(180deg, #ff634e 0%, #ffdf48 105.44%); */

  /* == down up == */
  /* background: linear-gradient(1deg, #ff634e 0%, #ffdf48 105.44%); */

  /* == base case - 2=  */
  background: linear-gradient(356deg, #ff634e 0%, #ffdf48 105.44%);

  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  

  @media screen and (max-width: 767px) {
    
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.14;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 16px;
    line-height: 1.19;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 30px;
    padding-bottom: 28px;
  }
`;

export const Position = styled.div`
  width: 100%;
  padding: 0 30px;
  align-items: center;
  font-weight: 400;
  color: #545454;
  @media screen and (min-width: 768px) {
    margin-right: 34px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 133px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-right: 34px;
  }
`;

export const DeveloperData = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }

`;



export const Paragraph = styled.p`
  margin: 0;
`;

export const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }


`;

export const ButtonModal = styled.button`
  margin-left: 6px;

  color: #545454;
  border: none;
  cursor: pointer;
  background-color: transparent;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    color: #ff6b08;
  }
`;



export const SpanTeam = styled.span`
  text-decoration-line: underline;
  width: 104px;
  text-align: left;
 
  &:hover { 
    color: #ff6b08;
   
  }
`;
