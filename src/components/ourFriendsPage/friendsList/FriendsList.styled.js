import styled from '@emotion/styled';


export const Title = styled.h2`
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.max};
text-align: center;
margin-top: 0px;
margin-bottom: 40px;
color: #000000;

@media screen and (min-width: 768px){
    font-size: ${p => p.theme.fontSizes.xxl};
}
`;

export const ListOfFriends = styled.ul`
margin-left: auto;
margin-right: auto;
margin-top: 0;
margin-bottom: 0;
padding: 0;

@media screen and (min-width: 768px){
    max-width: 768px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    gap: 32px 32px;
    margin-bottom: 100px;

};

@media screen and (min-width: 1280px) {
    max-width: 1280px;
    grid-template-columns: repeat(auto-fit, minmax(395px, 1fr));
    
  }
`;