import styled from '@emotion/styled';
import { TbLogout } from "react-icons/tb";

export const ButtonLogOut = styled.button`
display: flex;
align-items: center;
margin-top: 42px;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
letter-spacing: ${p => p.theme.letterSpacings.normal};
color: ${p => p.theme.colors.muted};

transition-property: color, stroke;
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  color: ${p => p.theme.colors.focus};
  stroke: ${p => p.theme.colors.focus};
}

@media screen and (min-width: 768px) {
  margin-top: 33px;
}

@media screen and (min-width: 768px) {
  margin-top: 26px;
}
`;

export const ButtonName = styled.span`
`;

export const LogOutIcon = styled(TbLogout)`
width: 18px;
height: 18px;
margin-right: 8px;
stroke: ${p => p.theme.colors.primary};

transition-property: color, stroke;
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  stroke: ${p => p.theme.colors.focus};
}
`;
