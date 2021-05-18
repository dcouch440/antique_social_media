import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Form = styled.form`
  padding: 5px;
  position: relative;
`;
export const Errors = styled.div`
  position: absolute;
  z-index: 3453453;
  top: 5%;
  right: 105%;
  border: 2px solid white;
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  font-size: 12px;
  > div {
    padding: 5px;
    background-color: black;
  }
`;

export const SignUpTitle = styled.div`
  ${include.cursiveFont}
  padding: 5px;
`;