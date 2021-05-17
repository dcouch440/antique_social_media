import styled from 'styled-components';

export const SignOutDiv = styled.div`
  cursor: pointer;
  color: white;
  height: 100%;
  grid-row: span 2;
  display: flex;
  align-items: center;
  font-family: 18px;
  padding: 20px;
  font-weight: 400;
  box-shadow: inset 0px -1px 1px 1px black;
  transition: .5s;
  :hover {
    color: white;
    background-color: black;
    color: white;
    background-color: #000000ad;
    padding-left: 30px;
  }
`;
