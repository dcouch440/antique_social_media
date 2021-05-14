import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Grid = styled.div`
  ${include.screenAdapt};
  ${include.darkBackgroundColor}
  padding: 7px;
  display: grid;
  grid-gap: 7px;
  margin: 0 auto;
  grid-auto-flow: dense;
  grid-template-columns: repeat(${({ columns }) => columns},  1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(1,  1fr);
  }
`;

export const Header = styled.div`
  ${include.screenAdapt};
  ${include.darkBackgroundColor}
  overflow: hidden;
  color: whitesmoke;
  font-family: 'Pacifico', cursive;
  text-shadow: -1px -2px 1px black;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 76px;
  margin: 0 auto;
`;

export const PageContainer = styled.div`
  ${include.noInteraction}
  width: inherit;
  height: inherit;
  position: relative;
`;

export const HeaderImage = styled.img`
  position: absolute;
  height: 20%;
  right: 20%;
`;