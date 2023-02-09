import styled from '@emotion/styled';

import bgLoginDesk from '../../images/login/bgLoginDesk.png';
import bgLoginTab from '../../images/login/bgLoginTab.png';
import bgLoginMob from '../../images/login/bgLoginMob.png';

export const Section = styled.section`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bgLoginMob});
  background-position: center bottom;
  background-size: contain;
  background-color: #fdf7f2;
  margin: 0 auto;
  @media screen and (max-width: 319px) {
    padding: 10 0px;
  }
  @media screen and (min-width: 320px) {
    padding: 42px 0;
  }
  @media screen and (min-width: 768px) {
    padding-top: 169px;
    padding-bottom: 266px;
    background-image: url(${bgLoginTab});
    min-height: calc(100vh - 75px);
  }
  @media screen and (min-width: 1280px) {
    padding-top: 114px;
    padding-bottom: 113px;
    background-image: url(${bgLoginDesk});
  }
`;
