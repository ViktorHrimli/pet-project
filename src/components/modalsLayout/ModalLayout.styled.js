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

  :hover {
    cursor: pointer;
    opacity: 0.6;
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
