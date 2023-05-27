import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 24px;
  color: black;
  font-size: 18px;
`;
export const ListElem = styled.li`
  margin-bottom: 14px;
`;
export const Link = styled(L)`
  color: black;
`;
