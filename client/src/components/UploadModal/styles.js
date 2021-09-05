import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const PreviewModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const PreviewImage = styled.img`
  max-height: 70%;
  max-width: 70%;
`;

export const ImageModal = styled.div`
  z-index: 99999;
  position: absolute;
  margin: -5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    height: auto;
    max-width: 90%;
    max-height: 90%;
  }
`;

export const BlurContainer = styled.div`
  z-index: 10001;
  position: absolute;
  margin: -5px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

export const Message = styled.div`
  ${include.cursiveFont}
  font-size: 4vw;
  color: white;
  background-color: #000000db;
  border-radius: 20px;
  border: 5px solid white;
  padding: 30px;
`;

export const CloseButton = styled.button`
  ${include.cursiveFont}
  ${include.blackBackgroundHoverTransition}
  cursor: pointer;
  z-index: 100040;
  position: absolute;
  z-index: 2;
  bottom: 40px;
  right: 30px;
  font-size: 15px;
  padding: 10px;
  border: 2px solid black;
`;


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