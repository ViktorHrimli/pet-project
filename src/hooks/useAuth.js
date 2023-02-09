import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    token,
    user,
  };
};
