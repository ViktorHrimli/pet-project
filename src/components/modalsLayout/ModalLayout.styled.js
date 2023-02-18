import styled from '@emotion/styled';

const ConteinerIconsClose = styled.div`
  position: absolute;

  top: 0px;
  right: 0px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.background};

  transition: cubic-bezier(0.39, 0.575, 0.565, 1) 300ms all;

  :hover {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    opacity: 0.8;
  }
`;

const ModalBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  overflow: hidden auto;
`;

export { ConteinerIconsClose, ModalBodyWrapper };
