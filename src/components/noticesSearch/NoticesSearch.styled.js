import styled from '@emotion/styled';
import {theme} from '../../styles/theme';


export const WrapperSearch = styled.div`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	height: 40px;

	@media screen and (min-width: 768px) {
    width: 608px;
		height: 44px;
  }
`;

export const SearchInput = styled.input`
	font-family: ${p => theme.fonts.body};,
	font-size: ${p => theme.fontSizes.xs};
	line-height: ${p => theme.lineHeights.max};
	font-weight: ${p => theme.fontWeights.medium};
	padding: 0 0 0 12px;
	border: none;
	border-radius: 20px;
	cursor: pointer;

  @media screen and (min-width: 768px) {
		line-height: ${p => theme.lineHeights.normal};
		font-size: ${p => theme.fontSizes.s};
		padding-left: 20px;
    width: 608px;
		height: 44px;
  }

	&::placeholder,
  ::-webkit-input-placeholder {
    color: #535353;
  }
  :-ms-input-placeholder {
    color: #535353;
	}
`;

export const BtnSearch = styled.button`
position: absolute;
top: 13px;
right: 13px;
width: 15px;
height: 15px;

@media screen and (min-width: 768px) {
	width: 18px;
	height: 18px;
}
`;

export const IconSearch = styled.img`
	width: 15px;
	height: 15px;

@media screen and (min-width: 768px) {
	width: 18px;
	height: 18px;
}
`;