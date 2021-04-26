import styled from 'styled-components';

export const GoBackButton = styled.button`
  all: unset;
  border: 2px solid black;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Page = styled.div`
  position: relative;
  height: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
`;