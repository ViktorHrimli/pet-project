import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { LogOutBtn } from 'components/userData/styles/UserData.styles'
import {ReactComponent as LogOutIcon} from '../../images/svg/logOutIcon.svg'

import { LogOutText } from 'components/userData/styles/UserData.styles'


export const LogOut = () => {
	const dispatch = useDispatch();
return (

	  <LogOutBtn
      onClick={() => dispatch(logOut())}>
        <LogOutIcon/>
  	  <LogOutText>Log out</LogOutText>
    </LogOutBtn>

)
};
