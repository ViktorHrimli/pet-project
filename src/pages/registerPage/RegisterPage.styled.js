import styled from '@emotion/styled';

import bgLoginDesk from '../../images/login/bgLoginDesk.png';
import bgLoginTab from '../../images/login/bgLoginTab.png';
import bgLoginMob from '../../images/login/bgLoginMob.png';

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;

export const Section = styled.section`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bgLoginMob});
  background-position: center bottom;
  background-size: contain;
  background-color: ${p => p.theme.colors.background};
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding-top: 169px;
    padding-bottom: 266px;
    background-image: url(${bgLoginTab});
  }
  @media screen and (min-width: 1280px) {
    padding-top: 114px;
    padding-bottom: 113px;
    background-image: url(${bgLoginDesk});
  }
`;
