import styled from 'styled-components';

export const SignOutDiv = styled.div`
  cursor: pointer;
  color: black;
  height: 100%;
  grid-row: span 2;
  display: flex;
  align-items: center;
  font-family: 18px;
  padding: 20px;
  font-weight: bold;
  box-shadow: inset 0px -1px 1px 1px black;
  :hover {
    color: white;
    background-color: black;
    transition: .5s;
    color: white;
    background-color: #000000ad;
    padding-left: 30px;
  }
`;
