import styled from '@emotion/styled';
import { TbLogout } from "react-icons/tb";

export const ButtonLogOut = styled.button`
display: flex;
align-items: center;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
letter-spacing: ${p => p.theme.letterSpacings.normal};
color: ${p => p.theme.colors.muted};

&:hover {
  color: ${p => p.theme.colors.focus};
  stroke: ${p => p.theme.colors.focus};
}
`;

export const ButtonName = styled.span`
`;
export const LogOutIcon = styled(TbLogout)`
width: 18px;
height: 18px;
margin-right: 8px;
stroke: ${p => p.theme.colors.primary};
`;
