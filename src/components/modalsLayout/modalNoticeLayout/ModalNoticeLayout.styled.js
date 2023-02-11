import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

const ConteinerIconsClose = styled.div`
  position: absolute;
  z-index: 2;
  
  top: 20px;
  right: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const CrossIcon = styled(AiOutlineClose)`
  width: 28px;
  height: 28px;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }

@media screen and (min-width: 768px) {
  width: 36px;
  height: 36px;
  }
`;

export { ConteinerIconsClose };
