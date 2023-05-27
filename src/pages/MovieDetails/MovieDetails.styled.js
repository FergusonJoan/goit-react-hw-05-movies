import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-align: center;
  margin-bottom: 24px;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: border-color 400ms ease, color 400ms ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #ff7341;
    color: #ff7341;
  }
`;

export const DetailsContainer = styled.div`
  padding: 80px 24px;
`;

export const List = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  list-style: none;
  color: inherit;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;
