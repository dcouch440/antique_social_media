import styled from 'styled-components';

export const ControlsPanel = styled.div`
  width: 200px;
  z-index: 9990;
  height: 100px;
  border-radius: 5px;
  background-color: #171717;
  color: white;
  border: 2px solid black;
  position: fixed;
  right: 5px;
  bottom: 50%;
  &::after {
    content: 'Menu';
    font-size: 13px;
    text-align: center;
    color: white;
    position: absolute;
    width: 50px;
    border-radius: 5px 0 0 5px;
    left: -50px;
    height: 20px;
    top: 3px;
    background-color: black;
  }
  @media (max-width: 900px) {display: none;}
`;

export const Slide = styled.div`
  display: flex;
  padding: 15px;
`;

export const Count = styled.div`
  padding-left: 5px;
  font-family: Pacifico, cursive;
`;

export const SliderContainer = styled.div`
  top: 200px;
  .rc-slider-track {
    background-color: white;
  }
  .rc-slider-step {
    background-color: gray;
  }
  .rc-slider-rail {
    background-color: red;

  }
  .rc-slider-handle {
    background-color: gray;
    border: 2px solid white;
  }
`;

export const GridTitle = styled.div`
  color: whitesmoke;
  font-size: 24px;
  text-align: center;
  font-family: Pacifico, cursive;
`;