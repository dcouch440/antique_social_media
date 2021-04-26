import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
	html, body {
    height: calc(100vh - 60px);
    width: 100%;
    margin: 0;
	}
	body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow: ${({stopScroll}) => stopScroll && 'hidden'};
	}
  #root {
    height: inherit;
    width: inherit;
  }
`;

export default GlobalStyles;