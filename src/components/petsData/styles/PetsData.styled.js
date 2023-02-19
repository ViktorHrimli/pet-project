import styled from '@emotion/styled';
import { ReactComponent as TrashIcon } from 'images/svg/delete.svg';

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
export const ImageWrapper = styled.div`
  border-radius: 20px;
  min-width: 240px;
  min-height: 240px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    border-radius: 40px;
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;

export const PetImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const PetsListItem = styled.li`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px;
    display: flex;
    position: relative;

    margin-right: 0px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const PetsDataWrapper = styled.div`
  @media screen and (max-width: 767.9px) {
    position: relative;
  }
`;

export const DeleteBtnDiv = styled.div`
position: absolute;
top: 0px;
right: 0px;

@media screen and (min-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #FDF7F2;
  top: 20px;
  right: 20px;

}
@media screen and (min-width: 1280px) {
  top: 20px;
  right: 20px;
  transition: color 300ms linear, background-color 300ms linear;

}
cursor: pointer;
}
`;

export const deleteButton = styled.button`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #fdf7f2;
`;

export const PetsList = styled.ul`
  margin-top: 26px;
`;

export const PetsDataText = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.375;
  max-width: 580px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const PetsUl = styled.ul``;
export const EditButton = styled.div`
  cursor: pointer;
`;

export const PetsDataItemKey = styled.span`
  font-weight: 500;
  margin-right: 2px;
`;
export const PetsDataItemValue = styled.span`
  font-weight: 400;
`;
export const DeleteBtn = styled(TrashIcon)`
  :hover {
    fill: ${p => p.theme.colors.primary};
    transition: 0.3s;
  }
`;
