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

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 288px;
    height: 328px;
  }
`;

export const CategoryNotice = styled.div`
position: absolute;
display: flex;
justify-content: space-around;
top: 20px;
left: 0;
width: 158px;
height: 28px;
align-items: center;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(50px);
`;

export const TitleCategory = styled.p`
margin: 0;
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.xxxs};
line-height: ${p => p.theme.letterSpacings.min};
`;

export const FirstPartOfWord = styled.span`
text-transform: uppercase;
`;

export const SecondPartOfWord = styled.span`

`;

export const PetPhoto = styled.img`
  width: 240px;
  height: 240px;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const TitleModalNotice = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacings.min};
  width: 200px;

  @media screen and (max-width: 767px) {
    margin: 16px 0;
    line-height: ${p => p.theme.lineHeights.max};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const ReferenceList = styled.div`
width: 240px;
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
@media screen and (min-width: 768px) {
margin-bottom: 32px;
height: 48px;
}
`;

export const Link = styled.a`
&:hover {
 text-decoration: underline;
 text-decoration-color: ${p => p.theme.colors.focus};
 color: ${p => p.theme.colors.focus};
}
`;
export const LableNotice = styled.p`
margin-bottom: 0;
width: 80px;
font-size: ${p => p.theme.fontSizes.xxs};
font-weight: 600;

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  lineHeight: ${p => p.theme.lineHeights.max};
  width: 120px; 
}
`;

export const DateModalNotice = styled.p`
  margin-bottom: 0;
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.medium};

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  lineHeight: ${p => p.theme.lineHeights.max};
}
`;

export const NoticeComments = styled.p`
  margin-bottom: 0;
  width: 240px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 768px) {
    width: 660px;
    font-size: ${p => p.theme.fontSizes.xs};
    lineHeight: 1.5;
}
`;

export const LableComments = styled.span`
margin-bottom: 0;
font-size: ${p => p.theme.fontSizes.xxs};
font-weight: 600;

@media screen and (min-width: 768px) {
  font-size: ${p => p.theme.fontSizes.xs};
  lineHeight: ${p => p.theme.lineHeights.max};
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

  &:hover,
  &:focus {
    border: 2px solid ${p => p.theme.colors.focus};
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.primary};
  }

@media screen and (max-width: 767px) {
  margin-top: 12px;
}

@media screen and (min-width: 768px) {
  width: 160px;
  margin-right: 12px;
}
`;

export const AddToFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid ${p => p.theme.colors.primary};

  &:hover,
  &focus {
    border: 2px solid ${p => p.theme.colors.focus};
  }

@media screen and (min-width: 768px) {
  width: 160px;
  margin-right: 12px;
}
`;

export const TitleNoticeButton = styled.p`
  margin-bottom: 0;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.min};
`;

export const IconRedHeart = styled(RedHeart)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: ${p => p.theme.colors.primary};
  stroke: ${p => p.theme.colors.primary};

  &:hover,
  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: ${p => p.theme.colors.focus};
    stroke: ${p => p.theme.colors.focus};
  }
`;

export const IconWasteBasket = styled(WasteBasket)`
margin-left: 15px;
width: 20px;
height: 20px;
opacity: 1;
`;