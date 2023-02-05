import { NAV_LIST } from './constants';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      {NAV_LIST.map(item => (
        <NavLink to={`/${item.link}`} key={item.label}>
          {item.label}
        </NavLink>
      ))}
    </>
  );
};
