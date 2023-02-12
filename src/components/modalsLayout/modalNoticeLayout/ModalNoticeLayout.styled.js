import styled from '@emotion/styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Backdrop = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ModalBox = styled.div`
  width: 640px;
  min-height: 440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const StyledBtn = styled.button`
  display: flex;
  border: none;
  background-color: inherit;
  margin-left: auto;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
`;

export const Icon = styled(AiFillCloseCircle)`
  height: 44px;
  width: 44px;
`;