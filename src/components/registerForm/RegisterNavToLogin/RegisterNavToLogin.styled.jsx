import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  width: 80px;
  font-weight: 700;
  font-size: 20px;
  color: inherit;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
  }
  &.active {
    color: #ab47b2;
  }
`;
