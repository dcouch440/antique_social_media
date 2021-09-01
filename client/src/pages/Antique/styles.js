import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Page = styled.div`
  ${include.screenAdapt}
  ${include.noInteraction}
  ${include.darkBackgroundColor}
  position: relative;
  height: inherit;
  padding: 5px;
  width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;