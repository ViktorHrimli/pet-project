import PropTypes from 'prop-types';
import { AddButton, IconCross, ButtonName, Circle } from './AddNoticeButton.styled';

export const AddNoticeButton = () => {

	return (
		<AddButton>
			<Circle>
			<IconCross />
			</Circle>
			<ButtonName>Add pet</ButtonName>
		</AddButton>
	)
};

AddNoticeButton.propTypes = {
	onClick: PropTypes.func,
};