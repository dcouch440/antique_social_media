import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const RoomsContainer = styled.div`
  ${include.screenAdapt}
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  grid-auto-rows: 180px;
  background-color: #171717;
  overflow-y: auto;
`;

export const RoomHeaders = styled.div`
  ${include.maxCenter}
  ${include.cursiveFont}
  position: relative;
  grid-row: span 1;
  grid-column: span 2;
  font-size: 80px;
  filter: grayscale(20%);
  color: white;
  box-shadow: inset 0 0 3px black;
  background-position: center;
`;

export const Toggle = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;
  transition: .5s;
  :hover {
    background-color: whitesmoke;
    color: black;
  }
`;