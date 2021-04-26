import styled from 'styled-components';

export const DropMenuPlate = styled.div`
  all: unset;
  z-index: 9999;
  position: absolute;
  color: black;
  height: 500px;
  width: 300px;
  display: ${({display}) => display};
  top: 5px;
  right: 70px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #9e9e9e;
  box-shadow: inset 0 0 6px black, 0px 0px 4px #00000096;
`;