import styled from 'styled-components';

export const DropMenuPlate = styled.div`
  z-index: 9999;
  position: absolute;
  color: black;
  overflow: hidden;
  width: 300px;
  display: ${({display}) => display};
  top: 55px;
  font-family: 'Courier New', Courier, monospace;
  right: 31px;
  border-radius: 6px;
  box-shadow: inset 0 0 2px 1px #00000099;
  background-color: #e0e0e0;
`;