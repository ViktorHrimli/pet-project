import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { logOut } from '../../redux/auth/operations';
import { ButtonLogOut, IconLogOut } from 'components/logOut/LogOut.styled';

export const LogOut = () => {
	const dispatch = useDispatch();
return (
	<ButtonLogOut
  onClick={() => dispatch(logOut())}>
		<IconLogOut />
  	<p>Log out</p>
  </ButtonLogOut>
)
};

LogOut.propTypes = {
	onClick: PropTypes.func,
};