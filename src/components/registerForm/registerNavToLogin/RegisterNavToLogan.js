import { Link, List, Item } from "./RegisterNavToLogin.styled";

export const RegisterNavToLogin = () => {
  return (
    <List>
      <Item>
        <Link to="/register">Register</Link>
      </Item>
      <Item>
        <Link to="/login">Log In</Link>
      </Item>
    </List>
  );
};
