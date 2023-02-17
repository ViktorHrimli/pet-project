import styled from '@emotion/styled';
import { VscAdd } from 'react-icons/vsc';

const AddPhoto = styled.label`
  position: relative;
  width: 208px;
  height: 208px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

const AddIconsPhoto = styled(VscAdd)`
  position: absolute;
  width: 48px;
  height: 48px;

  color: rgba(17, 17, 17, 0.6);

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 208px;
  height: 208px;

  border-radius: ${p => p.theme.radii.normal};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export { AddIconsPhoto, AddPhoto, CardImage, ImageWrapper };
