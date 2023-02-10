import styled from '@emotion/styled';
import { ReactComponent as search } from '../../images/svg/search.svg';
import { ReactComponent as crossNotice } from '../../images/svg/close-line.svg';

export const SearchForm = styled.form`

  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 608px;
    height: 44px;
  }
`;

export const SearchInput = styled.input`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  font-weight: ${p => p.theme.fontWeights.medium};
  width: 100%;
  height: 40px;
  padding: 0 0 0 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  }
  &:focus {
    ::placeholder {
      color: ${p => p.theme.colors.white};
    }
  }
  outline: none;
  color: ${p => p.theme.colors.muted};
  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    border-radius: 40px;
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
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.focus};
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconSearch = styled(search)`
  width: 15px;
  height: 15px;
  &:hover {
    fill: ${p => p.theme.colors.focus};
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconCross = styled(crossNotice)`
  width: 15px;
  height: 15px;
  &:hover {
    fill: ${p => p.theme.colors.focus};
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;