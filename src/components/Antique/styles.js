import styled from 'styled-components';


export const AntiqueContainer = styled.div`
  color: white;
  position: relative;
  margin: 0;
  overflow: hidden;
  grid-row: ${ (({dimensions}) => {
    const {height, width} = dimensions;
    return width > height ? 'span 2' : 'span 4'
  })};
  grid-column: span 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Image = styled.img`
`

export const AntiqueOverlay = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 999;
`;