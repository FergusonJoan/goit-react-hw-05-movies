import { NavLink as N } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background-color: #e9e9e9;
  box-shadow: 0px 1px 10px 2px #414141;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 8px;
  list-style: none;
  align-items: center;
  padding: 14px 0;
`;

export const NavLink = styled(N)`
  text-decoration: none;
  font-size: 24px;
  padding: 16px;
  &.active {
    color: green;
  }
`;
