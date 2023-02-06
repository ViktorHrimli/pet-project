import styled from '@emotion/styled';
import {theme} from '../../styles/theme';

export const SearchInput = styled.input`
	font-family: ${p => theme.fonts.body};,
	font-size: ${p => theme.fontSizes.xs};
	line-height: ${p => theme.lineHeights.max};
	font-weight: ${p => theme.fontWeights.medium};
	margin-left: auto;
	margin-right: auto;
	padding: 0 0 0 12px;
	border: none;
	border-radius: 20px;
  width: 100%;
	height: 40px;
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