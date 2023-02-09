import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.background};
  transform: ${({ open }) => (!open ? 'translateX(100%)' : 'translateX(0)')};
  height: 100vh;
  width: -webkit-fill-available;
  text-align: center;
  padding-top: 46px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1279px) {
    width: 100%;
  }

  a {
    transition: all 0.3s linear;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 32%;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;

  background: transparent;

  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    top: 39%;
  }

  div {
    width: 30px;
    height: 3.5px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
