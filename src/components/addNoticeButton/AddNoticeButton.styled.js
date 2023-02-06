import styled from '@emotion/styled';
import { theme } from 'styles';

export const AddButton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-weight: ${p => theme.fontWeights.medium};
font-size: ${p => theme.fontSizes.s};
line-height: ${p => theme.lineHeights.normal};
border: none;

@media screen and (max-width: 767px) {
	background-color: rgba(245, 146, 86, 1);
	width: 80px;
	height: 80px;
	border-radius: 50%;
	box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);

	&:hover,
	focus: {
		background: rgba(245, 146, 86, .7);
	}
}
`;

export const ButtonName = styled.p`
	font-size: ${p => theme.fontSizes.xxxs};
	line-height: ${p => theme.lineHeights.min};
	color: ${p => theme.colors.white};

@media screen and (min-width: 768px) {
	font-size: ${p => theme.fontSizes.s};
	line-height: ${p => theme.lineHeights.normal};
	color: ${p => theme.colors.black};
}
`;

export const Circle = styled.circle`
	displey: flex;
	align-items: center;
	ustify-content: space-around;
	border-radius: 50%;
	width: 27px;
	height: 27px;
	background-color: inherit;

	@media screen and (min-width: 768px) {
		width: 44px;
		height: 44px;
		background-color: rgba(245, 146, 86, 1);

		&:hover,
		:focus: {
		background-color: rgba(245, 146, 86, .7);
	}
}
`;

export const IconCross = styled.img`
width: 21px;
height: 21px;

@media screen and (min-width: 768px) {
	width: 16px;
	height: 16px;
}
`;