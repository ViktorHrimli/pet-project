import styled from '@emotion/styled';
import {ReactComponent as plus} from '../../images/svg/icon-cross-white.svg';

export const AddButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  border: none;

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-color: rgba(245, 146, 86, 1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);

  &:hover,
  &:focus: {
    background: rgba(245, 146, 86, .7);
  }
}
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