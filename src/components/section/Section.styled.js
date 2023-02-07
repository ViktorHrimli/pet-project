import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding-top: 127px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 160px;
  }

	@media screen and (min-width: 1280px) {
    padding-top: 130px;
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