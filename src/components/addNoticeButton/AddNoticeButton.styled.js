import styled from '@emotion/styled';
import { ReactComponent as plus } from '../../images/svg/icon-cross-white.svg';

export const Wrapper = styled.div`
  position: absolute;
`;

export const AddButton = styled.button`
  position: absolute;
  z-index: 0;  
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  border: none;
  
  @media screen and (max-width: 767px) {   
    position: fixed;
    z-index: 1;
    bottom: 4%;
    right: 4%;
    width: 80px;
    height: 80px;
    flex-direction: column;
    border-radius: ${p => p.theme.radii.round};
    background-color: rgba(245, 146, 86, 1);
    box-shadow: ${p => p.theme.shadows.normal};
    
    &:hover {
      background-color: ${p => p.theme.colors.focus};
    }
  }
  @media screen and (min-width: 768px) {
    top: 1px;
    left: 577px;
    width: 129px;
  }

  @media screen and (min-width: 1280px) {
    left: 1118px;
};
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
  width: 27px;
  height: 27px;

  border-radius: ${p => p.theme.radii.round};
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
