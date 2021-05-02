import styled from 'styled-components';

export const SignedInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 30px 0;
  height: 100%;
  width: 100%;
  > * {
    margin: 5px;
  }
`

export const Username = styled.div`
  text-align: center;
  padding: 5px;
  font-size: 24px;
`;

export const SignOutButton =styled.button`
  justify-self: flex-end;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 0 2px black;
  color: black;
  font-weight: bold;
`;