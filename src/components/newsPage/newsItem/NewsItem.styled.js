import styled from "@emotion/styled";

export const ItemNews = styled.li`
max-width: 280px;
margin-left: auto;
margin-right: auto;
margin-bottom: 40px;


@media screen and (min-width: 768px) {
   max-width: 336px;
   margin-left: 0;
   margin-right: 0;
   margin-bottom: 0;
   /* flex-basis: calc((100% - 64px) / 2); */
  }

 @media screen and (min-width: 1280px) {
    max-width: 395px;
    /* flex-basis: calc((100% - 64px) / 3); */
 } 
`;

export const LineImg = styled.div`
width: 200px;
height: 4px;
margin-bottom: 4px;
border-radius: 40px;
background-image: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);

@media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
    background-image: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
    border-radius: 40px;
  }
`;

export const NewsName = styled.h3`
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.01em;
margin: 0px;
margin-bottom: 16px;
color: #111111;


-webkit-line-clamp: 2; /* Число отображаемых строк */
display: -webkit-box; /* Включаем флексбоксы */
-webkit-box-orient: vertical; /* Вертикальная ориентация */
overflow: hidden;

@media screen and (min-width: 1280px) {
    max-width: 395px;
    flex-basis: calc((100% - 64px) / 3);
 }

`;

export const Text = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;


color: #111321;

margin: 0; 
-webkit-line-clamp: 7; 
display: -webkit-box; 
-webkit-box-orient: vertical; 
overflow: hidden;

@media screen and (min-width: 768px) {
   -webkit-line-clamp: 6; 
  };

@media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
 }
`;

export const BottomDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
/* margin-bottom: 40px; */

@media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 0;
  };
`;

export const NewsDate = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
margin: 0;
color: rgba(17, 17, 17, 0.6);
`;

export const NewsLink = styled.a`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;

color: #F59256;
`
