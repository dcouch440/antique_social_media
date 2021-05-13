import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const RoomsContainer = styled.div`
  ${include.screenAdapt}
  ${include.darkBackgroundColor}
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;
  grid-auto-rows: 180px;
  overflow-y: auto;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;

export const RoomHeaders = styled.div`
  ${include.pageHeader}
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