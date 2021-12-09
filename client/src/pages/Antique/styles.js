import * as include from '../../styled-mixens';

import styled from 'styled-components';

export const Page = styled.div`
  ${include.screenAdapt}
  ${include.noInteraction}
  ${include.darkBackgroundColor}
  position: relative;
  min-height: 100%;
  width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;