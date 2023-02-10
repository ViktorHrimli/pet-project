import styled from '@emotion/styled';

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  width: 240px;

  padding: 9px 0;

  border-radius: ${p => p.theme.radii.big};

  cursor: pointer;

  :hover {
    box-shadow: ${p => p.theme.shadows.normal};
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

const AddButtonsNext = styled(AddButton)`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

const AddButtonsCancel = styled(AddButton)`
  background-color: transparent;
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.primary};
`;

const AddButtonConteiner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[4]};

  grid-gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const NoticeConteinerButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  grid-gap: 10px;
  max-width: 240px;

  @media screen and (min-width: 768px) {
    max-width: 410px;
    margin-right: 40px;
  }
`;

const NoticeConteinerButtonNested = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  grid-gap: 10px;
  max-width: 240px;
`;

const NoticeButton = styled.button`
  display: inline-flex;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  padding: 8px 27px;

  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.text;
  }};
  background-color: ${p => {
    return p.active ? p => p.theme.colors.primary : 'transparent';
  }};

  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 40px;

  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    margin-right: 0;
  }
`;

export {
  AddButtonConteiner,
  AddButtonsCancel,
  AddButtonsNext,
  NoticeButton,
  NoticeConteinerButton,
  NoticeConteinerButtonNested,
};
