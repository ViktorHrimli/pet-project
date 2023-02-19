import styled from "@emotion/styled";

export const Button = styled.button`
border: none;
outline: none;
width: 45px;
height: 45px;
border-radius: 50%;
background-color: ${p => p.theme.colors.primary};
position: fixed;
z-index: 1;
bottom: 15px;
right: 5%;

font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.ms};
font-weight: ${p => p.theme.fontWeights.bold};

animation: mymove 3s infinite;
    @keyframes mymove {
      20% {
        opacity: 0.7;
      }
      40% {
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0), #ff8000 0 5px 15px,
          rgb(255, 111, 0) 0 -2px 15px, #fff 0 -1px 15px;
        opacity: 0.8;
      }
      50% {
        box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0), #ff8000 0 5px 15px,
          rgb(255, 111, 0) 0 -2px 15px, #fff 0 -1px 15px;
        opacity: 0.9;
      }
      85% {
        box-shadow: none;
      }
    }

@media screen and (min-width: 768px) {
width: 55px;
height: 55px;

/* bottom:25px;
right: 25px; */


font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};

}

@media screen and (min-width: 1280px) {
width: 65px;
height: 65px;
/* bottom:55px;
right: 55px; */

font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
}
`