import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 9999999;
  top: 0;
  /* background: linear-gradient(180deg ,rgb(0 0 0 / 35%) 0%,rgb(0 0 0 / 57%) 74%); */
  background: linear-gradient(180deg ,rgb(32 30 26) 0%,rgb(23 22 21) 74%);
  box-shadow: 0px 0px 20px 2px #0000008f, inset 0px -1px 90px -1px #ffffff29;
  color: whitesmoke;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;

export const Menu = styled.div`
    cursor: pointer;
    user-select: none;
    margin-right: 30px;
    text-shadow: -1px -1px 3px rgb(255 255 255 / 20%), 1px 1px 1px rgb(0 0 0);
    color: #0000008c;
    font-size: 17px;
    border-radius: 5px;
    padding: 11px;
    box-shadow: inset 0px 0px 3px 1px black, 0px 0px 2px black;
    border: 1px solid #000000ba;
    background-image:
      -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
      -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%),
      -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
      -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
      -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%),
      -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%),
      -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),
      -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);
  &:hover {
    color: #0080bd;
    transition: .1s;
  }
  &:active {
    color: blue;
    text-shadow: -1px -1px 3px rgb(255 255 255 / 20%), 1px 1px 1px rgb(0 0 0), 0px 0px 15px white;
    box-shadow: inset 0px 0px 5px 1px black, 0px 0px 2px black, 0 0 5px white;
    background: -webkit-radial-gradient( 50% 70%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%), -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);
  }
  transition: .1s;
`;


export const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 40px;
  font-family: 'Pacifico', cursive;
`;

export const DropdownUsername = styled.div`
  font-family: 'Pacifico', cursive;
  background-image: url('https://res.cloudinary.com/dbyretay5/image/upload/v1620696860/pexels-pixabay-210126_eh5kyp.jpg');
  background-position: end;
  background-size: cover;
  filter: grayscale(100%);
  grid-row: span 3;
  color: white;
  text-align: center;
  border-radius: 6px 6px 0 0;
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

export const DropdownHubLink = styled.div`
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

export const DropdownBottomLink = styled.div`
  cursor: pointer;
  color: white;
  height: 100%;
  grid-row: span 2;
  display: flex;
  align-items: center;
  font-family: 18px;
  padding: 20px;
  font-weight: 400;
  border-top: 1px solid black;
  box-shadow: inset 0px -1px 1px 1px black;
  transition: .5s;
  border-radius: 0 0 6px 6px;
  :hover {
    color: white;
    background-color: black;
    color: white;
    background-color: #000000ad;
    padding-left: 30px;
  }
`;
