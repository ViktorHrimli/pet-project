import styled from '@emotion/styled';


export const InputCont = styled.div`
width: 280px;
position: relative;
margin-bottom: 40px;

margin-left:auto;
margin-right: auto;

  @media screen and (min-width: 768px) {
  width: 608px;
  }
`;

export const FindNews = styled.input`
width: 280px;
height: 40px;
box-sizing: border-box;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
padding: 0;
padding-left: 12px;
letter-spacing: 0.04em;

color: #535353;
background-color: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border: 0;
border-radius: 20px;

  @media screen and (min-width: 768px) {
  width: 608px;
  height: 44px;
  font-size: 20px;
  line-height: 27px;
  padding-left: 20px;
  }

`;

export const FindNewsBtn = styled.button`
position: absolute;
bottom: 12px;
right:13px;
border: none;
outline: none;
display: block;
padding: 10;
background-color: transparent;
`;

export const ButtonImg = styled.img`
  @media screen and (min-width: 768px) {
   width: 18px;
   height: 18px;
  }
`;

export const ListOfNews = styled.ul`
margin-bottom: 60px;

  @media screen and (min-width: 768px) {
  max-width: 768px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
  gap: 60px 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
  max-width: 1280px;
  grid-template-columns: repeat(auto-fit, minmax(395px, 1fr));
  gap: 60px 32px;
  margin-bottom: 200px;
  }
`;