import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const FormData = styled.form`
  ${include.cursiveFont}
  text-shadow: 1px 3px 1px black;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  height: 100%;
  letter-spacing: 5px;
  font-weight: bold;
  color: white;
  > * {
    margin-bottom: 5px;
  }
`;

export const LabelsTitleYear = styled.div`
  display: flex;
  > div:nth-child(1) { width: 80%;}
  > div:nth-child(2) { width: 20%;}
`;

export const TitleYear = styled.div`
  ${include.inputFocus}
  display: flex;
`;

export const YearInput = styled.input`
  ${include.inputFocus}
  font-size: 29px;
  width: 20%;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const TitleInput = styled.input`
  ${include.inputFocus}
  margin-bottom: 10px;
  font-size: 29px;
  width: 80%;
  border-radius: 5px;
`;

export const NameInput = styled.input`
  ${include.inputFocus}
  border-radius: 5px;
  width: 100%;
  font-size: 29px;
`;

export const TextArea = styled.textarea`
  ${include.inputFocus}
  position: relative;
  width: 100%;
  resize: none;
  height: 70%;
  font-size: 20px;
  border-radius: 5px;
`;

export const Button = styled.button`
  ${include.cursiveFont}
  ${include.inputFocus}
  position: absolute;
  right: 35px;
  bottom: 35px;
  background-color: whitesmoke;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px 15px;
  color: black;
`;