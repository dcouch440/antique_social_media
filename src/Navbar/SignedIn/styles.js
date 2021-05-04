import styled from 'styled-components';

export const Username = styled.div`
  font-family: 'Pacifico', cursive;
  background-color: #00000054;
  grid-row: span 3;
  text-align: center;
  color: white;
  letter-spacing: 3px;
  border: 1px solid black;
  box-shadow: inset 0 0 3px 0px #00000042;
  text-shadow: -1px -1px 0px #2a2a2a, -2px 1px black;
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
  letter-spacing: 3px;
  box-shadow: inset 0px 0px 0px 1px #00000036;
  a {
    transition: .5s;
    text-shadow: -0px 1px white;
    padding: 5px;
    padding-left: 20px;
    width: 100%;
  }
  :hover {
    border-color: 2px solid white;
    a {
      color: white;
      background-color: #000000ad;
      padding-left: 30px;
    }
  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
`;