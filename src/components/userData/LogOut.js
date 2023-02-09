import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';


export const LogOut = () => {
	const dispatch = useDispatch();
return (
	<button
  onClick={() => dispatch(logOut())}>

  	<p>Log out</p>
  </button>
)
};
