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

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Title = styled.h1`
  max-width: 291px;
  font-size: 32px;
  padding-left: 20px;
  /* padding-right: 20px; */
  /* margin: 0; */
  line-height: ${p => theme.lineHeights.normal};
  font-weight: ${p => theme.fontWeights.bold};
  color: ${p => theme.colors.black};

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    max-width: 607px;
    font-size: ${p => theme.fontSizes.xxxl};
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    max-width: 591px;
  }
`;

export const HomeSection = styled.section`
  padding-top: 100px;
  min-height: 100vh;
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
    min-height: 100vh;
    padding-top: 130px;

    background-image: url(${portraitT}), url(${BgT});
    /* background-size: 645px 715px, 100vw 1085px; */
    background-size: 395px 465px, 100vw 685px;
    /* background-size: 335px 405px, 100vw 615px; */

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitT2x}), url(${BgT2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 408px;
    min-height: 100vh;

    /* background-image: url(${portraitD}), url(${BgD}), url(${Union});
    background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px); */
    background-image: url(${portraitD}), url(${BgD});
    background-size: 590px 640px, 100vw calc(100vw * 0.375);
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px);
    &:after {
      content: '';
      position: absolute;
      animation: heartbeat 1.3s infinite;
      width: 92px;
      height: 90px;
      background-image: url(${Union});
      top: calc(50% - 180px);
      left: calc(50% + 64px);

      @keyframes heartbeat {
        0% {
          transform: scale(1);
        }
        10% {
          transform: scale(1.05);
        }
        20% {
          transform: scale(1.1);
        }
        30% {
          transform: scale(1.15);
        }
        40% {
          transform: scale(1.2);
        }
        50% {
          transform: scale(1.25);
        }
        60% {
          transform: scale(1.2);
        }
        70% {
          transform: scale(1.15);
        }
        80% {
          transform: scale(1.1);
        }
      }
    }
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitD2x}), url(${BgD2x}), url(${Union2x});
    }
  }
`;
