import styled from 'styled-components';
import * as include from '../../styled-mixens';


export const GridContainer = styled.div`
  ${include.screenAdapt};
  ${include.darkBackgroundColor}
  margin: 0 auto;
  min-height: 100%;
`;

export const Grid = styled.div`
  width: 100%;
  padding: 7px;
  display: grid;
  grid-gap: 7px;
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
  position: relative;
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
  height: 115%;
  right: 3%;
  @media (max-width: 1300px) {
    height: 95%
  }
  @media (max-width: 1000px) {
    height: 65%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const BottomBoundaryDiv = styled.div`
  width: 1px;
  height: 250px;
`;