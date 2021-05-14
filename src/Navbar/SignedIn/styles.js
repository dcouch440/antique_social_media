import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 40px;
  font-family: 'Pacifico', cursive;
`;

export const Username = styled.div`
  font-family: 'Pacifico', cursive;
  background-image: url('https://res.cloudinary.com/dbyretay5/image/upload/v1620696860/pexels-pixabay-210126_eh5kyp.jpg');
  background-position: end;
  background-size: cover;
  filter: grayscale(100%);
  grid-row: span 3;
  color: white;
  text-align: center;
  letter-spacing: 3px;
  border: 1px solid black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 20px;
  span {
    background-color: #000000bf;
    padding: 5px 10px;
    border-radius: 15px;
    border: 1px solid white;
  }
`;

export const HubLink = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  letter-spacing: 3px;
  box-shadow: inset 0px 0px 0px 1px #00000036;
  :hover {
    border-color: 2px solid white;
    a, span {
      color: white;
      background-color: #000000ad;
      padding-left: 30px;
    }
  }
  a, span {
    cursor: pointer;
    color: white;
    font-weight: 300;
    text-decoration: none;
    transition: .5s;
    padding: 5px;
    padding-left: 20px;
    width: 100%;
  }
`;