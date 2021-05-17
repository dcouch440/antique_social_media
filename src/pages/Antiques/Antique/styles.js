import styled from 'styled-components';

export const AntiqueContainer = styled.div`
  color: white;
  position: relative;
  margin: 0;
  overflow: hidden;
  grid-row: ${ (({ dimensions }) => {
    const { height, width } = dimensions;
    return width > height ? 'span 2' : 'span 4';
  })};
  border: 1px solid #ffffff63;
  box-shadow: 0 0 0 1px #ffffff63;
  grid-column: span 1;
`;

export const AntiqueOverlay = styled.div`
  position: absolute;
  padding: 3px;
  font-family: Pacifico, cursive;
  color: goldenrod;
  text-shadow: 1px 1px 1px black;
  text-decoration-color: gray;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 999;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const OverlayText = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  font-size: 14px;
  border-radius: 1px solid black;
  box-shadow: inset 20px -20px 20px 0px #00000066, 0 0 2px black;
  background-color: #0000003b;
  > * {
    margin: 0 5px;
  }
`;