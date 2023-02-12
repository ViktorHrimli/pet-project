import styled from '@emotion/styled';
import { ReactComponent as plus } from '../../images/svg/icon-cross-white.svg';

export const Wrapper = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  border: none;
  position: absolute;
  z-index: 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    background-color: rgba(245, 146, 86, 1);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);
    position: fixed;
    z-index: 1;
    bottom: 4%;
    right: 4%;

    &:hover {
      background-color: ${p => p.theme.colors.focus};
    }
  }
  @media screen and (min-width: 768px) {
    top: -160px;
    right: 0;
  }

  @media screen and (min-width: 1280px) {
    top: -105px;
  } ;
`;

export const ButtonName = styled.p`
  margin-bottom: 0;
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    padding-right: 12px;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    color: ${p => p.theme.colors.black};
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    background-color: ${p => p.theme.colors.primary};

    &:hover {
      background-color: ${p => p.theme.colors.focus};
    }
  }
`;

export const IconCross = styled(plus)`
  width: 21px;
  height: 21px;

  @media screen and (min-width: 768px) {
    align-items: center;
    width: 16px;
    height: 16px;
  }
`;
