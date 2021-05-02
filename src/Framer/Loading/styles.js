import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  display: flex;
  width: inherit;
  height: inherit;
  justify-content: center;
  align-items: center;
`;

export const HourGlass = styled.span`
  font-size: 3em;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid black;
  border-radius: 0.35em;
  margin: 13px;
    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      right: -0.25em;
      bottom: -0.1em;
      border-width: 0;
      background: black;
      width: 0.35em;
      height: 0.08em;
      transform: rotate(45deg);
    }
`;

export const LoadingCircle = styled.span`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #c0c0c0;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;