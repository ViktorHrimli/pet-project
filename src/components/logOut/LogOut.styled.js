import styled from '@emotion/styled';
import { TbLogout } from "react-icons/tb";

export const ButtonLogOut = styled.button`
display: flex;
align-items: stretch;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
color: ${p => p.theme.colors.muted};
&:hover {
	color: ${p => p.theme.colors.primary};
	stroke: ${p => p.theme.colors.primary};
}
`;

export const ButtonName = styled.p`
margin-bottom: 0;
`
export const LogOutIcon = styled(TbLogout)`
width: 18px;
height: 18px;
margin-right: 8px;
`;