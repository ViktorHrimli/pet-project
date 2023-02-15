import styled from '@emotion/styled';
import {ReactComponent as plus} from '../../../images/svg/icon-cross-white.svg';

export const AddButton = styled.button`
cursor: pointer;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: center;
&:hover {
  color: ${p => p.theme.colors.primary};
  stroke: ${p => p.theme.colors.primary};
}
	font-weight: ${p => p.theme.fontWeights.medium};
	font-size: ${p => p.theme.fontSizes.s};
	line-height: ${p => p.theme.lineHeights.normal};
	border: none;

	@media screen and (min-width: 768px) {
    position: absolute;
    top: -430px;
    right: 32px;
  }
  @media screen and (min-width: 1280px) {
    top: 0px;
    right: 32px;

  }
}
`;

export const ButtonName = styled.p`
margin-right: 15px;
	margin-bottom: 0;
	font-size: ${p => p.theme.fontSizes.s};
	line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body}


@media screen and (min-width: 768px) {
	padding-right: 12px;
	font-size: ${p => p.theme.fontSizes.s};
	line-height: ${p => p.theme.lineHeights.normal};
	color: ${p => p.theme.colors.black};
}
`;

export const Circle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 50%;
	width: 27px;
	height: 27px;
	background-color: ${p => p.theme.colors.primary};

	@media screen and (min-width: 768px) {
		width: 44px;
		height: 44px;
		background-color: rgba(245, 146, 86, 1);

		&:hover,
		&:focus: {
		background-color: rgba(245, 146, 86, .7);
	}
}
`;

export const IconCross = styled(plus)`
	width: 16px;
	height: 16px;

@media screen and (min-width: 768px) {
	align-items: center;
	width: 16px;
	height: 16px;
}
`;
