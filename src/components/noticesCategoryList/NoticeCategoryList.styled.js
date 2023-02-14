import styled from '@emotion/styled';

export const CardList = styled.ul`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[6]};
    justify-content: center;
    margin-bottom: ${p => p.theme.space[5]};
  }
`;
export const ButtonList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]};
  justify-content: center;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]};
`;

export const PaginationButton = styled.button`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  color: #ff6101;
  background-color: inherit;
  border: 2px solid #ff6101;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  width: 248px;
  border-radius: ${p => p.theme.radii.big};
  margin-bottom: ${p => p.theme.space[3]};
  display: block;
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 40px,
    rgb(0 0 0 / 60%) -23px 0px 20px -23px, rgb(0 0 0 / 60%) 23px 0px 20px -23px,
    rgb(0 0 0 / 10%) 0px 0px 40px inset;
  transition-property: background-color, color, font-weight, scale;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff6101;
    color: ${p => p.theme.colors.white};
    scale: 1.05;
    font-weight: bolder;
  }
`;
