import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const DeleteButton = styled.button`
  ${include.blackBackgroundHoverTransition}
  ${include.cursiveFont}
  cursor: pointer;
  z-index: 5;
  position: absolute;
  bottom: 15px;
  left: 15px;
  background-color: white;
  border: 2px solid white;
  color: black;
`;