import styled from 'styled-components';

export const SlideShow = styled.div`

  /* CONTAINER */
  width: 100%;
  height: 100%;
  position: relative;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #151515de;
  overflow: hidden;
  padding: 0;
  margin: 0;

  .next,
  .prev {
    top: calc(50% - 20px);
    position: absolute;
    background: white;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
    color: blue;
    box-shadow: inset 0px 0px 3px 1px black, 0px 0px 2px black;
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
      box-shadow: inset 0px 0px 3px 1px black, 0px 0px 1px black, 0 0 2px 1px black;
      text-shadow: 0 0 1px blue;
      transition: .2s;
    }
    &:active {
      box-shadow: inset 0px 0px 5px 1px black, 0px 0px 2px black, 0 0 7px white;
      transition: .2s;
      background-image:
        -webkit-radial-gradient( 50% 40%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
        -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),
        -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%),
        -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%),
        -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),
        -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);
    }
    @media (max-width: 1000px) { display: none; }
  }

  .next {
    right: 10px;
  }

  .prev {
    left: 10px;
    transform: scale(-1);
  }

  img {
    padding: 5px;
    position: absolute;
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
    @media (max-width: 1000px) { padding: 5px; }
  }
`;
