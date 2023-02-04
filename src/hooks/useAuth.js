import { useSelector } from 'react-redux';
import { selectUser, selectToken } from 'redux/auth/selectors';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return {
    token,
    user,
  };
};
