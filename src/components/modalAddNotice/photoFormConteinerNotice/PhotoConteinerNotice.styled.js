import styled from '@emotion/styled';

import { VscAdd } from 'react-icons/vsc';
import { TiDeleteOutline } from 'react-icons/ti';
const NoticeAddPhoto = styled.label`
  position: relative;
  display: block;
  width: 116px;
  height: 116px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
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
  position: relative;
  display: flex;
  justify-content: center;

  width: 116px;
  height: 116px;

  border-radius: ${p => p.theme.radii.normal};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const IconsDelete = styled(TiDeleteOutline)`
  position: absolute;
  width: 25px;
  height: 25px;

  color: black;

  top: 0px;
  right: 0px;

  opacity: 0.5;

  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 300ms all;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export { AddIconsPhoto, NoticeAddPhoto, CardImage, ImageWrapper, IconsDelete };
