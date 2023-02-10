import styled from '@emotion/styled';
import { ReactComponent as search } from '../../../images/svg/search.svg';
import { ReactComponent as crossNotice } from '../../../images/svg/close-line.svg';

export const InputCont = styled.div`
width: 280px;
position: relative;
margin-bottom: 40px;

margin-left:auto;
margin-right: auto;

  @media screen and (min-width: 768px) {
  width: 608px;
  }
`;

export const FindNews = styled.input`
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
font-weight: ${p => p.theme.fontWeights.medium};
letter-spacing: ${p => p.theme.letterSpacings.normal};
width: 100%;
height: 40px;
border: 0;
border-radius: 20px;
padding: 0;
padding-left: 12px;
cursor: pointer;
outline: none;
color: ${p => p.theme.colors.black};
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
transition-property: background-color;
transition-duration: 0.25s;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&::placeholder,
::-webkit-input-placeholder {
  color: #535353;
}
:-ms-input-placeholder {
    color: #535353;
  }
   
&:focus {
  ::placeholder {
    color: ${p => p.theme.colors.white};
  }
}
  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    border-radius: 40px;
    padding-left: 20px;
    width: 608px;
    height: 44px;
}
`;

export const FindNewsBtn = styled.button`
position: absolute;
bottom: 10px;
right:13px;
border: none;
outline: none;
display: block;
padding: 0;
`;

export const IconSearch = styled(search)`
  width: 15px;
  height: 15px;
  &:hover {
    fill: ${p => p.theme.colors.focus};
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconCross = styled(crossNotice)`
  width: 15px;
  height: 15px;
  &:hover {
    fill: ${p => p.theme.colors.focus};
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;