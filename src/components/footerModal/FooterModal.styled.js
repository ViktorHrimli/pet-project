import styled from '@emotion/styled';

import { BsFillXDiamondFill } from 'react-icons/bs';

export const Overlay = styled.div`
  position: fixed;
  opacity: 1;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 2;
  transition: opacity 250ms, visibility 250ms ease-in-out;
`;

export const ModalContainer = styled.div`
  min-height: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px 10px;
  display: flex;
`;

export const ModalContent = styled.div`
  max-width: 340px;
  padding-bottom: 40px;
  background: rgba(193, 197, 234, 0.7);
  border-radius: 10px;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 900px;
  }
`;

export const ModalTitle = styled.h2`
  letter-spacing: 0.03px;
  text-align: center;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 45px;
  font-size: 25px;
  line-height: 1.17;
  display: flex;
  position: relative;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  @media screen and (min-width: 768px) {
    letter-spacing: 0.05px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    line-height: 1.17;
    display: flex;
  }
`;

export const CloseSvg = styled(BsFillXDiamondFill)`
  background-color: rgba(0, 0, 0, 0);
  stroke: #ffffff;
  border: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  width: 30px;
  height: 30px;

  &:hover {
    width: 35px;
    height: 35px;
    color: ${p => p.theme.colors.primary};
    stroke: ${p => p.theme.colors.primary};
  }
`;
