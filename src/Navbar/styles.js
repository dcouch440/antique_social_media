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
