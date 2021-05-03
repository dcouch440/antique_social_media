import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Grid = styled.div`
  ${include.screenAdapt};
  display: grid;
  grid-gap: 5px;
  margin: 0 auto;
  grid-auto-flow: dense;
  grid-template-columns: repeat(${({columns}) => columns},  1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(1,  1fr);
  }
`;

export const Header = styled.div`
  ${include.screenAdapt};
  font-family: 'Pangolin', cursive;
  height: 60px;
  text-align: center;
  font-size: 40px;
  background-color: whitesmoke;
  border: 1px solid black;
  margin: 5px auto;
`;

export const SliderContainer = styled.div`
  width: 50px;
  background-color: black;
  .rc-slider-track {
    background-color: red;
  }
  .rc-slider-step {
    background-color: red;
  }
  .rc-slider-rail {
    background-color: red;
  }
  .rc-slider-handle {
    background-color: red;
  }
`