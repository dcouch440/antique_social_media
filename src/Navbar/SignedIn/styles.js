import styled from 'styled-components';

export const Username = styled.div`
  font-family: 'Pacifico', cursive;
  grid-row: span 3;
  text-align: center;
  color: black;
  border: 1px solid black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 24px;
`;

export const HubLink = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  a {
    transition: .5s;
    padding: 5px;
    padding-left: 20px;
    width: 100%;
  }
  :hover {
    a {
      color: white;
      background-color: black;
      padding-left: 30px;
    }
  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }

`