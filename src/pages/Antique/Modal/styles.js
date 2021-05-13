import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const PreviewModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
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
  z-index: 10000;
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
  position: absolute;
  bottom: 40px;
  right: 30px;
  font-size: 15px;
  padding: 10px;
  border: 2px solid black;
`;