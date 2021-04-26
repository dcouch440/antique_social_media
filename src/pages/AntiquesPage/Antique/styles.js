import styled from 'styled-components';

export const Antique = styled.div`
  background-color: black;
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  justify-content: center;
  grid-row: ${ (({dimensions}) => {
    const {height, width} = dimensions;
    return width > height ? 'span 2' : 'span 4'
  })};
  grid-column: span 1;
  img {
    width: 100%;
    height: auto;
  }
`;

export const AntiqueOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;