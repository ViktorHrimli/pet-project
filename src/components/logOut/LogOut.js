import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

import {
	ButtonLogOut,
	LogOutIcon,
	ButtonName
} from 'components/logOut/LogOut.styled';

export const LogOut = () => {
	const dispatch = useDispatch();

	return (
		<ButtonLogOut
		onClick={() => dispatch(logOut())}>
			<LogOutIcon />
			<ButtonName>Log out</ButtonName>
		</ButtonLogOut>
	)
};

LogOut.propTypes = {
	onClick: PropTypes.func,
};