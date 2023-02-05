import styled from '@emotion/styled';

const ConteinerIconsClose = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.background};
`;

const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export { ConteinerIconsClose, BackgroundModal };
