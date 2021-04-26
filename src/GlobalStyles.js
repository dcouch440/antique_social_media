import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
	html, body {
    height: 100%;
    width: 100%;
    margin: 0;
	}
	body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow: ${({stopScroll}) => stopScroll && 'hidden'};
	}
  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;