import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Grid = styled.div`
  ${include.screenAdapt};
  display: grid;
  grid-gap: 5px;
  margin: 0 auto;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2,  1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(1,  1fr);
  }
`;

export const Header = styled.div`
  ${include.screenAdapt};
  height: 60px;
  text-align: center;
  font-size: 40px;
  background-color: whitesmoke;
  border: 1px solid black;
  margin: 5px auto;
`;