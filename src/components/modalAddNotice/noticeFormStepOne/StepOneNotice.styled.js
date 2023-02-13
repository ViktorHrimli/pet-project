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

const AddErrorMessage = styled.span`
  position: absolute;
  width: 100%;

  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};

  bottom: -18px;
  left: 18px;
  color: red;

  @media screen and (min-width: 768px) {
    bottom: -26px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export { NoticeTextDiscription, AddErrorMessage };
