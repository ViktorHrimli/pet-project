import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

export const CardList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[6]};
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardItem = styled.li`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.normal};

  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    flex: none;
  } ;
`;

export const CardImage = styled.img`
  margin-bottom: ${p => p.theme.space[5]};
  width: 100%;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  } ;
`;

export const Notiece = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  left: 0;
  top: ${p => p.theme.space[5]};
  background-color: rgba(255, 255, 255, 0.6);
  width: 138px;
  height: 28px;
  border-radius: 0px 40px 40px 0px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: 1.25;
  letter-spacing: ${p => p.theme.letterSpacings.normal};
`;

export const Pick = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.6);

  top: ${p => p.theme.space[3]};
  right: ${p => p.theme.space[3]};
  border-radius: ${p => p.theme.radii.round};

  color: rgba(255, 255, 255, 0.6);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
`;

export const PickIcon = styled(FaHeart)`
  height: 28px;
  width: 28px;
  /* background-color: rgba(255, 255, 255, 0.6); */
  stroke-width: 20px;
  stroke: ${p => p.theme.colors.primary};

  transition-property: fill;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Try = styled.span`
  left: 110px;
  position: absolute;
`;

export const CardTitle = styled.h3`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bolt};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.min};
  padding-left: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const InfoList = styled.ul`
  padding-left: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[4]};
`;

export const InfoItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  display: flex;
  margin-bottom: ${p => p.theme.space[2]};
`;

export const CardButton = styled.button`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  color: ${p => p.theme.colors.primary};
  background-color: inherit;
  border: 2px solid ${p => p.theme.colors.primary};
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  width: 248px;
  border-radius: ${p => p.theme.radii.big};
  margin-bottom: ${p => p.theme.space[3]};
  margin-left: auto;
  margin-right: auto;
  display: block;

  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
export const DeleteButton = styled.button`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  color: #ff6101;
  background-color: inherit;
  border: 2px solid #ff6101;
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  width: 248px;
  border-radius: ${p => p.theme.radii.big};
  margin-bottom: ${p => p.theme.space[3]};
  margin-left: auto;
  margin-right: auto;
  display: block;

  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ff6101;
    color: ${p => p.theme.colors.white};
  }
`;
