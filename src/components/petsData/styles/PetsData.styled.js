import styled from '@emotion/styled';

export const PetsContainer = styled.div`

  display: block;
  align-items: center;
  justify-content: center;
  border-radius: 20px;

  margin-right: 32px;
  min-width: 736px;
  margin-bottom: 20px;
  @media ${p => p.theme.screens.tablet} {
    padding: 0 32px 32px 32px;
}
  @media ${p => p.theme.screens.desktop} {
    min-width: 821px;
  }
`;

export const AddButton = styled.div`
  display: flex;Z
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
margin-bottom: 32px;
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
export const PetImage = styled.img`
border-radius: 20px;
min-width: 240px;
min-height: 240px;
@media screen and (min-width: 768px) {
width: 161px;
height: 161px;
margin-right: 32px;
}`

export const PetsListItem = styled.li`
background-color: ${p => p.theme.colors.white};
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 40px;

@media screen and (min-width: 768px) {
  padding: 20px;
display: flex;
position: relative;

 position: relative;
 box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
 border-radius: 40px;


  flex-grow: 1;
  }
`

export const PetsDataWrapper = styled.div`

`

export const DeleteBtnDiv = styled.div`

position: absolute;
right: 0px;
@media screen and (min-width: 768px) {
  top: 20px;
  right: 20px;
}
@media screen and (min-width: 1280px) {
  top: 20px;
  right: 20px;
}
`

export const PetsList = styled.ul`
margin-top: 26px;
`

export const PetsDataText = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 1.35;`


