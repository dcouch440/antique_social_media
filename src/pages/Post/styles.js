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
  background-color: #484848a6;
`;