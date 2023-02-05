import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { ButtonLogOut, IconLogOut } from './LogOut.styled';
import iconLogOut from '../../images/svg/logout.png'

export const LogOut = () => {
	const dispatch = useDispatch();
return (
	<ButtonLogOut
  onClick={() => dispatch(logOut())}>
		<IconLogOut src={iconLogOut} alt=''/>
  	<p>Log out</p>
  </ButtonLogOut>
)
};

LogOut.propTypes = {
	onClick: PropTypes.func,
};