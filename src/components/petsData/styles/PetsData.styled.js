import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 20px 80px 20px;
  @media ${p => p.theme.screens.tablet} {
    padding: 0 32px 32px 32px;

  }
  @media ${p => p.theme.screens.desktop} {
  }
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  & a {
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.primary};
    & svg {
      width: 30px;
      height: 30px;
    }
  }
  @media ${p => p.theme.screens.tablet} {
    position: absolute;
    top: 175px;
    right: 0;
    margin-right: 32px;
  }
  @media ${p => p.theme.screens.desktop} {
    top: 115px;
  }
`;

export const Title = styled.h3`
font-family: 'Manrope';
font-weight: 500;
font-size: 20px;
line-height: 135%;
color: #111111;
margin-bottom: 0px;
@media screen and (min-width: 768px) {


}
@media screen and (min-width: 1280px) {
  visibility: visible;
  font-size: 28px;
  line-height: 135%;
}
`;

export const Text = styled.div`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const PetsDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 135%;
  }
  @media screen and (min-width: 1280px) {

    font-size: 28px;
    line-height: 135%;
  }
`
