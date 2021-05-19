import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Page = styled.div`
  ${include.screenAdapt}
  margin: 0 auto;
  display: flex;
  height: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 200%;
  }
`;

export const PreviewImage = styled.img`
  max-width: 98%;
  min-width: 70%;
  box-shadow: inset 0 0 3px #c8c8c82b;
  height: auto;
  max-height: 90%;
  object-fit: cover;
`;

export const ImageInput = styled.input`
  top: 15px;
  left: 15px;
  background-color: #32302d;
  color: white;
  position: absolute;
  font-family: monospace;
  box-shadow: inset 0 0 1px 0px #ffffff5c;
`;

export const NoImage = styled.div`
  font-family: 'Pacifico', cursive;
  margin-bottom: 15px;
  color: whitesmoke;
  font-size: 84px;
  text-align: center;
`;

export const NoImageCaption = styled.div`
  font-size: 18px;
  padding: 20px;
  justify-content: center;
  color: whitesmoke;
`;

export const ImagePreview = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex: 1;
  background-color: #1b1b1b;
`;

export const FormContainer = styled.div`
  flex: 1;
  background-color: #333333;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: absolute;
  background-color: #0000001c;
  font-size: 80px;
  color: white;
  span {
    ${include.cursiveFont}
    border-radius: 15px;
    border: 2px solid white;
    padding: 25px;
    background-color: black;
  }
`;