import styled from '@emotion/styled';
import {ReactComponent as redHeart} from '../../images/svg/icons_heart.svg';

export const WrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: auto;
	padding: 0 20px;
	border-radius: 20px;
	outline: 1px solid red;
@media screen and (min-width: 768px) {
	flex-direction: row; 
	width: 540px;
	border-radius: 40px;
}
`;
export const PetPhoto = styled.img`
width: 100%;
height: auto;
background-size: cover;
background-repeat: no-repeat;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
`
export const WrapperPetPhoto = styled.div`
	margin-top: 60px;
	width: 240px;
	height: 240px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	background-color: ${p => p.theme.colors.white}
	@media screen and (min-width: 768px) {
		margin-top: 32px;
		margin-right: 20px;
		width: 288px;
		height: 328px;
	}
`;

export const WrapperInfoBlock = styled.div`
display: grid;

`;

export const TitleModalNotice = styled.h3`
	margin: 16px 0;
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
	line-height: ${p => p.theme.lineHeights.max};
	letter-spacing: ${p => p.theme.letterSpacings.min};
`;

export const ReferenceList = styled.div`
	
`;

export const InfoItem = styled.div`
display: flex;
outline: 1px solid green;
`;

export const LableNotice = styled.p`
outline: 1px solid blue;
`;

export const DateModalNotice = styled.p`
width: 70%;
outline: 1px solid black;
`;

export const NoticeComments = styled.p`
	width: 240px
	heiight: 95px;
`;

export const ButtonModalWrapper = styled.div`

`;

export const ContactButton = styled.button`
	width: 240px;
	height: 40px;
	border-radius: 40px;
`;

export const AddToFavoriteButton = styled.button`
	width: 240px;
	height: 40px;
	border-radius: 40px;
`;

export const TitleNoticeButton = styled.p`
	font-size: ${p => p.theme.fontSizes.xs};
	font-weight: ${p => p.theme.fontWeights.medium};
	line-height: ${p => p.theme.lineHeights.max};
`;

export const IconRedHeart = styled(redHeart)`
	width: 16px;
	height: 16px;
`;