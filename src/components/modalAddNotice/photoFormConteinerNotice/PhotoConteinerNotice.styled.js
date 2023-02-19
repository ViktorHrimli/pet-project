import styled from '@emotion/styled';

import { VscAdd } from 'react-icons/vsc';
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

export { AddIconsPhoto, NoticeAddPhoto };
