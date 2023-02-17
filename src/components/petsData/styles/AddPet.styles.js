import styled from '@emotion/styled';
import {ReactComponent as plus} from '../../../images/svg/icon-cross-white.svg';

export const AddButton = styled.button`
cursor: pointer;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: center;
};
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
    margin-left: 400px;

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
  transition: color 300ms linear, background-color 300ms linear;
	background-color: ${p => p.theme.colors.primary};
  &:hover {
    background-color: ${p => p.theme.colors.focus};
  }
  animation: mymove 3s infinite;
  @keyframes mymove {
    20% {
      opacity: 0.7;
    }
    40% {
      box-shadow: #fff 0 -1px 8px, rgb(255, 111, 0) 0 -2px 8px,
        #ff8000 0 -4px 8px, 3px 3px 5px 8px rgba(0, 0, 0, 0);
      opacity: 0.8;
    }
    50% {
      box-shadow: 2px 2px 5px 8px rgba(0, 0, 0, 0), #ff8000 0 -4px 8px,
        rgb(255, 111, 0) 0 -2px 8px, #fff 0 -1px 8px;
      opacity: 0.9;
    }
    85% {
      box-shadow: none;
    }
  }


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
