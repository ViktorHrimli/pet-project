import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 319px) {
    padding: 127px 10px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 127px 20px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 160px 32px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 130px 16px 0;
  }
`;

export const TitleSection = styled.h2`
margin-left: auto;
margin-right: auto;
font-weight: ${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.max};

@media screen and (max-width: 767px) {
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: 28px;
}

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xxl};
  margin-bottom: 40px;
}

@media screen and (min-width: 1280px) {
  font-size: ${p => p.theme.fontSizes.xxl};
  margin-bottom: 60px;
}
`;