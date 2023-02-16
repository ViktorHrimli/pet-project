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
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: -0.01em;
  text-align: center;
  color: ${p => p.theme.colors.focus};

  @media screen and (min-width: 768px) {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.max};
  } ;
`;

export const EmptyRequestImg = styled.img`
  border-radius: 50%;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]};
`;
