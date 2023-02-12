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
  }

 @media screen and (min-width: 1280px) {
    max-width: 395px;
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
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.max};
letter-spacing: -0.01em;
margin: 0px;
margin-bottom: 16px;
color: ${p => p.theme.colors.black};


-webkit-line-clamp: 2;
display: -webkit-box; 
-webkit-box-orient: vertical; 
overflow: hidden;

@media screen and (min-width: 1280px) {
    max-width: 395px;
 }

`;

export const Text = styled.p`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};

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
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
margin: 0;
color: rgba(17, 17, 17, 0.6);
`;

export const NewsLink = styled.a`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.medium};
font-size:  ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};

color: ${p => p.theme.colors.primary};
`;