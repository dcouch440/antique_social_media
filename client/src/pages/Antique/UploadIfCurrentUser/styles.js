import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const UploadModalButton = styled.button`
  ${include.cursiveFont}
  ${include.blackBackgroundHoverTransition}
  z-index: 9;
  position: absolute;
  background-color: white;
  border: 2px solid white;
  border-radius: 3px;
  padding: 7px;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;