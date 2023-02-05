import styled from '@emotion/styled';
import { theme } from 'styles';
import portraitM from '../../images/home/HomepageM.webp';
import portraitM2x from '../../images/home/HomepageM@2x.webp';
import portraitT from '../../images/home/HomepageT.webp';
import portraitT2x from '../../images/home/HomepageT@2x.webp';
import portraitD from '../../images/home/HomepageD.webp';
import portraitD2x from '../../images/home/HomepageD@2x.webp';
import BgM from '../../images/home/BgM.png';
import BgM2x from '../../images/home/BgM@2x.png';
import BgT from '../../images/home/BgT.png';
import BgT2x from '../../images/home/BgT@2x.png';
import BgD from '../../images/home/BgD.png';
import BgD2x from '../../images/home/BgD@2x.png';
import Union from '../../images/home/Union.png';
import Union2x from '../../images/home/Union@2x.png';

export const Title = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: ${p => theme.lineHeights.normal};
  font-weight: ${p => theme.fontWeights.normal};
  color: ${p => theme.colors.black};
  @media screen and (min-width: 768px) {
    max-width: 588px;
    font-size: ${p => theme.fontSizes.xxxl};
    line-height: 1.47;
  }
`;

export const HomeSection = styled.section`
  padding-top: 60px;
  min-height: 543px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${portraitM}), url(${BgM});
  background-size: 320px 337px, 100vw 470px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${portraitM2x}), url(${BgM2x});
  }
  @media screen and (min-width: 768px) {
    min-height: 1108px;
    padding-top: 88px;
    background-image: url(${portraitT}), url(${BgT});
    background-size: 645px 715px, 100vw 1033px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitT2x}), url(${BgT2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: calc(100vh - 64px);
    background-image: url(${portraitD}), url(${BgD}), url(${Union});
    background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px);
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitD2x}), url(${BgD2x}), url(${Union2x});
    }
  }
`;
