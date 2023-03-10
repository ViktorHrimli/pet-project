import styled from '@emotion/styled';
import { ReactComponent as CrossLine } from '../../../images/svg/close-line.svg';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${p => p.theme.colors.muted};
  overflow-y: scroll;
  scrollbar-width: none;
  z-index: 5;
  
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 280px;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  
@media screen and (max-width: 767px) {
  top: 160px;
}

@media screen and (min-width: 768px) {
  width: 704px;
}
`;

export const StyledBtn = styled.button`
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${p => p.theme.colors.background};
  
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Icon = styled(CrossLine)`
  width: 16px;
  height: 16px;

  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.primary};
}

@media screen and (min-width: 768px) {
  width: 28px;
  height: 28px;
}
`;