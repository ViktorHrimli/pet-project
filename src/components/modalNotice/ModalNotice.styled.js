import styled from '@emotion/styled';
import {ReactComponent as redHeart} from '../../images/svg/icons_heart.svg';

export const WrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: auto;
	padding: 0 20px;
	border-radius: 20px;
	background: #ffffff;
	
@media screen and (min-width: 768px) {
	width: 540px;
	border-radius: 40px;
}
`;
export const WrapperInfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
@media screen and (min-width: 768px) {
	flex-direction: row;
	margin-top: 32px;
}
`;

export const WrapperPetPhoto = styled.div`
	width: 240px;
	height: 240px;
	padding-right: 20px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	background-color: ${p => p.theme.colors.white};

	@media screen and (min-width: 768px) {
		margin-right: 20px;
		width: 288px;
		height: 328px;
	}
`;

export const PetPhoto = styled.img`
	width: 240px;
	height: 240px;
	background-size: cover;
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

	@media screen and (max-width: 767px) {
		margin: 16px 0;
		line-height: ${p => p.theme.lineHeights.min};
	}

	@media screen and (min-width: 768px) {
		margin-bottom: 20px;
		font-size: ${p => p.theme.fontSizes.l};
	}
`;

export const ReferenceList = styled.div`
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

export const LableNotice = styled.p`
margin-bottom: 0;
width: 110px;
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
	heiight: 95px;
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
	border: 2px solid ${p => p.theme.colors.primary};

	$:hover: {
		color: ${p => p.theme.colors.white};
		background-color: ${p => p.theme.colors.focus};
		border: 2px solid ${p => p.theme.colors.focus};
	}

@media screen and (max-width: 768px) {
	margin-bottom: 12px;
}

@media screen and (min-width: 768px) {
	width: 160px;
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

	$:hover: {
		color: ${p => p.theme.colors.white};
		background-color: ${p => p.theme.colors.focus};
		border: 2px solid ${p => p.theme.colors.focus};
	}

@media screen and (min-width: 768px) {
	width: 160px;
	margin-right: 12px;
}
`;

export const TitleNoticeButton = styled.p`
	font-size: ${p => p.theme.fontSizes.xs};
	font-weight: ${p => p.theme.fontWeights.medium};
	line-height: ${p => p.theme.lineHeights.max};
`;

export const IconRedHeart = styled(redHeart)`
	width: 16px;
	height: 16px;
	margin-left: 8px;

	$:hover: {
		fill: ${p => p.theme.colors.white};
	}
`;