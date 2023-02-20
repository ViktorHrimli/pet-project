import styled from '@emotion/styled';
import { ReactComponent as search } from '../../../images/svg/search.svg';
import { RxCrossCircled } from 'react-icons/rx';

export const InputCont = styled.div`
  width: 280px;
  position: relative;
  margin-bottom: 40px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 60px;
  }
`;

export const SearchForm = styled.form`
  transition: color 300ms ease-in-out;
`;
export const FindNews = styled.input`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: ${p => p.theme.radii.normal};
  padding: 0;
  padding-left: 12px;
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.black};
  box-shadow: ${p => p.theme.shadows.normal};
  background-color: ${p => p.theme.colors.white};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 300ms linear;

  ::placeholder {
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::placeholder,
  ::-webkit-input-placeholder {
    color: #535353;
  }
  :-ms-input-placeholder {
    color: #535353;
  }

  &:hover {
    ::placeholder {
      color: ${p => p.theme.colors.primary};
    }
  }

  &:focus {
    box-shadow: 7px 4px 14px ${p => p.theme.colors.primary};
    ::placeholder {
      color: ${p => p.theme.colors.white};
    }
  }
  @media screen and (min-width: 768px) {
    line-height: ${p => p.theme.lineHeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    border-radius: ${p => p.theme.radii.big};
    padding-left: 20px;
    width: 608px;
    height: 44px;
  }
`;

export const FindNewsBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 13px;
  border: none;
  outline: none;
  display: block;
  padding: 0;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.focus};
  }
`;

export const IconSearch = styled(search)`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const IconCross = styled(RxCrossCircled)`
  width: 15px;
  height: 15px;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
