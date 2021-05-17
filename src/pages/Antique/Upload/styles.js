import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const ImageInput = styled.input`
  width: 300px;
  top: 40px;
  left: 30px;
  background-color: #32302d;
  color: white;
  position: absolute;
  font-family: monospace;
  box-shadow: inset 0 0 1px 0px #ffffff5c;
`;

export const ImageUpload = styled.div`
  display: flex;
`;

export const UploadButton = styled.button`
  ${include.cursiveFont}
  ${include.blackBackgroundHoverTransition}
  position: absolute;
  cursor: pointer;
  background-color: white;
  border: 2px solid black;
  font-size: 13px;
  top: 40px;
  right: 30px;
  padding: 2px 30px;
`;