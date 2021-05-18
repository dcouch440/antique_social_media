import styled from 'styled-components';

export const DropMenuPlate = styled.div`
  z-index: 9999;
  position: absolute;
  width: 300px;
  display: ${({ display }) => display};
  top: 62px;
  font-family: 'Courier New', Courier, monospace;
  right: 34px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: inset 0 0 2px 1px #00000099;
  background-color: #242424;
`;