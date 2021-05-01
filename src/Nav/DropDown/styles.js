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
  right: 31px;
  border-radius: 12px;
  border: 1px solid black;
  background-color: #e7d5bb;
  border: 2px solid black;
`;