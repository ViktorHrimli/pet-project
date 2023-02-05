// import { NavLink } from 'react-router-dom';
import {
  ButtonAuth,
  ListAuthItem,
  ListAuthEl,
} from 'components/authNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <ListAuthEl>
      <ListAuthItem>
        <ButtonAuth to="/login">Login</ButtonAuth>
      </ListAuthItem>
      <ListAuthItem>
        <ButtonAuth to="/register">Registration</ButtonAuth>
      </ListAuthItem>
    </ListAuthEl>
  );
};

// return (
//   <>
//     <ListItem>
//       <ButtonAuthLink type="button" href="/login">
//         Login
//       </ButtonAuthLink>
//     </ListItem>
//     <ListItem>
//       <ButtonAuthLink type="button" href="/register">
//         Registration
//       </ButtonAuthLink>
//     </ListItem>
//   </>
// );
