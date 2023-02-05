import { StyledMenu, StyledBurger } from 'components/burger/Burger.styled';
import React from 'react';

export const Menu = ({ open, children }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const BurgerZone = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} children={children} />
    </div>
  );
};

export const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
