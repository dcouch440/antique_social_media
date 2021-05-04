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
  font-family: 'Pacifico', cursive;
  text-shadow: -1px -1px #455a64;
  height: 70px;
  text-align: center;
  font-size: 40px;
  margin: 5px auto;
`;

export const PageContainer = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;