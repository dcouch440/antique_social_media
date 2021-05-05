import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 2px solid #000000;
  border-radius: 7px;
  box-shadow: inset 0 0 1px black;
  :focus {
    outline: none;
    box-shadow: 0 0 0 4px black;
  }
`;

export const DropDownButton = styled.button`
  cursor: pointer;
  justify-self: flex-end;
  z-index: 5000;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 0 2px black;
  font-family: 'Pacifico', cursive;
  color: black;
  font-weight: bold;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const DropDownButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  > * {margin-right: 5px;}
`;