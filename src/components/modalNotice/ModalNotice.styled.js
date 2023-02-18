import styled from '@emotion/styled';
import {ReactComponent as RedHeart} from '../../images/svg/heart-for-button.svg';
import {ReactComponent as WasteBasket} from '../../images/svg/delete.svg';

export const WrapperContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  background: #ffffff;
  
@media screen and (min-width: 768px) {
  width: 704px;
  border-radius: 40px;
}
`;

export const WrapperInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

@media screen and (min-width: 768px) {
  flex-direction: row;
  margin-top: 12px;
}
`;

export const WrapperPetPhoto = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 288px;
    height: 328px;
  }
`;

export const CategoryNotice = styled.div`
position: absolute;
display: flex;
top: 20px;
left: 0;
padding-left: 20px;
width: 158px;
height: 28px;
align-items: center;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(50px);
`;

export const TitleCategory = styled.span`
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.lineHeights.min};
letter-spacing: ${p => p.theme.letterSpacings.normal}
`;

export const FirstPartOfWord = styled.span`
text-transform: uppercase;
`;

export const SecondPartOfWord = styled.span`

`;

export const PetPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const TitleModalNotice = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacings.min};

  @media screen and (max-width: 767px) {
    margin: 16px 0;
    line-height: ${p => p.theme.lineHeights.max};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

export const ReferenceList = styled.div`
  width: 100%;

 @media screen and (min-width: 768px) {
  width: 320px;
}
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const CommentsItem = styled.div`
  display: flex;
  margin-top: 28px;
  margin-bottom: 40px;
  width: 100%;
  height: 95px;
  overflow: auto;
  word-wrap: break-word;

@media screen and (min-width: 768px) {
  margin-bottom: 32px;
  height: 48px;
}
`;

export const LableNotice = styled.span`
  width: 118px;
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: 600;

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  lineHeight: ${p => p.theme.lineHeights.max};
  width: 120px; 
}
`;

export const Link = styled.a`
  transition-property: color, text-decoration-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
  text-decoration: underline;
  text-decoration-color: ${p => p.theme.colors.focus};
  color: ${p => p.theme.colors.focus};
}
`;

export const DateModalNotice = styled.span`
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.medium};

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
}
`;

export const NoticeComments = styled.span`
  width: 240px;
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};

@media screen and (min-width: 768px) {
  width: 660px;
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
}
`;

export const LableComments = styled.span`
  margin-bottom: 0;
  font-size: ${p => p.theme.fontSizes.xxs};
  lineHeight: ${p => p.theme.lineHeights.normal};
  font-weight: 600;

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
`;

export const ButtonModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

@media screen and (min-width: 768px) {
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding-right: 20px;
  margin-bottom: 32px;
}
`;

export const ContactButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 40px;
  background: ${p => p.theme.colors.primary};
  border: 2px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};

  transition-property: background-color, border;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.focus};
    border: 2px solid ${p => p.theme.colors.focus};
  }

@media screen and (max-width: 767px) {
  margin-bottom: 12px;
}

@media screen and (min-width: 768px) {
  width: 160px;
}
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.black};


  transition-property: border-color, color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.focus};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.focus};
  }

@media screen and (max-width: 767px) {
  margin-top: 12px;
}

@media screen and (min-width: 768px) {
  width: 160px;
  margin-right: 12px;
}
`;

export const WrapperFavoriteButton = styled.div`

`;


export const AddToFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.primary};

  transition-property: border-color, filter, color, stroke;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &focus {
    border-color: ${p => p.theme.colors.focus};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: ${p => p.theme.colors.focus};
    stroke: ${p => p.theme.colors.focus};
  }

@media screen and (min-width: 768px) {
  width: 160px;
  margin-right: 12px;
}
`;

export const DeleteFromFavoriteButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: 2px solid ${p => p.theme.colors.primary};

  transition-property: border-color, filter, color, stroke;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &focus {
    border-color: ${p => p.theme.colors.primary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: ${p => p.theme.colors.white};
    stroke: ${p => p.theme.colors.white};
  }

@media screen and (min-width: 768px) {
  width: 160px;
  margin-right: 12px;
}
`

export const TitleNoticeButton = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.max};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
`;

export const IconRedHeart = styled(RedHeart)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: ${p => p.theme.colors.primary};

  transition-property: filter, color, stroke;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconWhiteHeart = styled(RedHeart)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: ${p => p.theme.colors.white};
  stroke: ${p => p.theme.colors.white};

  transition-property: filter, color, stroke;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconWasteBasket = styled(WasteBasket)`
  margin-left: 15px;
  width: 20px;
  height: 20px;
  opacity: 1;

  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;