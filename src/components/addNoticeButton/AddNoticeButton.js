import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addNotice } from '../../redux/notices/operations';
import { AddButton, IconCross, ButtonName, Circle } from './AddNoticeButton.styled';
import iconCross from '../../images/svg/icon-cross-white.svg'

export const AddNoticeButton = () => {
	const dispatch = useDispatch();

	const handleAddNotice = () => {
		dispatch(addNotice());
	}

	return (
		<AddButton onClick={handleAddNotice}>
			<Circle>
			<IconCross src={iconCross} alt=''/>
			</Circle>
			<ButtonName>Add pet</ButtonName>
		</AddButton>
	)
};

AddNoticeButton.propTypes = {
	onClick: PropTypes.func,
};