import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding: 80px 24px;
`;
export const IsHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const MoviesInfoContainer = styled.div`
  display: flex;
`;
