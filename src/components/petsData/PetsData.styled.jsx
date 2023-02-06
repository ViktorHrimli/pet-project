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

export const HeadPetsData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 25px 20px;
  @media ${p => p.theme.screens.tablet} {
    padding: 20px 0 24px 0;
  }
  @media ${p => p.theme.screens.desktop} {
    padding: 0 0 28px 0;
  }
`;

export const AddButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  & a {
    width: 40px;
    height: 40px;
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
    position: absolute;
    top: 115px;
  }
`;

export const Title = styled.h3`
font-family: 'Manrope';
padding-bottom: 18px;
padding-top: 60px;
font-weight: 500;
font-size: 20px;
line-height: 135%;
color: #111111;
@media screen and (min-width: 768px) {
  padding: 0 20px 40px 34px;
  font-size: 28px;
  line-height: 135%;
}
@media screen and (min-width: 1280px) {
  padding: 0 20px 28px 17px;
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

  @media screen and (min-width: 768px) {
    padding: 0 20px 40px 34px;
    font-size: 28px;
    line-height: 135%;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 20px 28px 17px;
    font-size: 28px;
    line-height: 135%;
  }
`
