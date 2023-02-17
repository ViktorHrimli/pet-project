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
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  width: 100%;
  height: 40px;
  padding: 0 0 0 12px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  ::placeholder {
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  box-shadow: ${p => p.theme.shadows.normal};
  background-color: ${p => p.theme.colors.white};
  
  &:hover {
    ::placeholder {
      color: ${p => p.theme.colors.focus};
    }
  }

  &:focus {
    ::placeholder {
      color: ${p => p.theme.colors.white};
    }
  }

  outline: none;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    width: 608px;
    height: 44px;
    padding-left: 20px;
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    border-radius: ${p => p.theme.radii.big};
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
  outline: none;
  border: none;

  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.focus};
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconSearch = styled(search)`
  width: 15px;
  height: 15px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconCross = styled(crossNotice)`
  width: 15px;
  height: 15px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;