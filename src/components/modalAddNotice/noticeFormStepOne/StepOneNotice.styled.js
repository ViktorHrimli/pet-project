import styled from '@emotion/styled';

const NoticeTextDiscription = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  width: 240px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    width: 445px;
  }
`;

export { NoticeTextDiscription };
