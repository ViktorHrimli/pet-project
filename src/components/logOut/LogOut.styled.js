import styled from '@emotion/styled';
import { ReactComponent as iconLogOut} from '../../images/svg/logOutIcon.svg';

export const ButtonLogOut = styled.button`
display: flex;
align-items: center;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xs};
line-height: ${p => p.theme.lineHeights.max};
color: ${p => p.theme.colors.muted};
`;

export const IconLogOut = styled(iconLogOut)`
width: 18px;
height: 18px;
margin-right: 8px;
`;
