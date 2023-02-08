import styled from '@emotion/styled';


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

export const EmptyRequestText = styled.p`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: -0.01em;
text-align: center;
color: #FF6101;

@media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
  };

`;

export const EmptyRequestImg = styled.img`
border-radius: 50%;
width: 40%;
margin-left: auto;
margin-right: auto;
`;