import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import {ReactComponent as redHeart} from '../../images/svg/icons_heart.svg';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	border-radius: 20px;
@media screen and (min-width: 768px) {
	flex-direction: row; 
	width: 540px;
	border-radius: 40px;
}
`;

export const PetPhoto = styled.div`
	margin-top: 60px;
	width: 240px;
	height: 240px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	background-color: ${p => p.theme.colors.white}
	@media screen and (min-width: 768px) {
		width: 288px;
		height: 328px;
	}
`;

export const TitleModalNotice = styled.h3`
	margin: 16px 0;
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
	line-height: ${p => p.theme.lineHeights.max};
	letter-spacing: ${p => p.theme.letterSpacings.min};
`;

export const FormNotice = styled(Form)`
	
`;

export const LableNotice = styled.label`

`;

export const InputModalNotice = styled(Field)`
width: 70%;
`;

export const AddNoticeComments = styled.textarea`
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

export const ErrorMessageModalNotice = styled(ErrorMessage)`

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