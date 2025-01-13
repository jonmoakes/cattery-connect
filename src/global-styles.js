import { createGlobalStyle } from "styled-components";
import { customYellow, gentleGrey, softBlack } from "./styles/colours";

const GlobalStyles = createGlobalStyle`

  :root {
    font-family: 'Comfortaa', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    font-weight: 700;
    font-size: calc(1rem + 0.25vw);
    font-synthesis: none;
    text-transform: capitalize;
    text-align: center;
    text-rendering: optimizeLegibility; 
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:${gentleGrey};
   
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    color: #006D6A;

    @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  }

  p {
    color: ${softBlack};

    &.yellow {
      color: ${customYellow};
      text-shadow: 1px 1px 1px ${softBlack};
    }
  }
`;

export default GlobalStyles;
