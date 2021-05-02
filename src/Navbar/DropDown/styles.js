import styled from 'styled-components';

export const DropMenuPlate = styled.div`
  z-index: 9999;
  padding: 5px;
  position: absolute;
  color: black;
  height: 300px;
  width: 300px;
  display: ${({display}) => display};
  top: 55px;
  font-family: 'Courier New', Courier, monospace;
  right: 31px;
  border-radius: 6px;
  background-color: #dbcebc;
  border: 1px solid black;
`;