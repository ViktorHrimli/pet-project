import styled from '@emotion/styled';
import { theme } from 'styles';

export const ButtonLogOut = styled.button`
display: flex;
align-items: center;
font-weight: ${p => theme.fontWeights.medium};
font-size: ${p => theme.fontSizes.xs};
line-height: ${p => theme.lineHeights.max};
color: ${p => theme.colors.muted};
`;

export const IconLogOut = styled.img`
width: 18px;
height: 18px;
margin-right: 8px;
`;