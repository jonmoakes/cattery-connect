import { createGlobalStyle } from "styled-components";
import { gentleGrey, softBlack, teal } from "./styles/colours";

import BackgroundImage from "./assets/cat-background-house.webp";

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
    position: relative;
        &:before {
            content: "";
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            z-index: -10;
            background: 
              url(${BackgroundImage}) repeat center center;
              -webkit-background-size: center;
              -moz-background-size: center;
              -o-background-size: center;
              background-size: contain;
              opacity:0.4;
        }
  }

  h1 {
    color: ${teal};

    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  p {
    color: ${softBlack};
  }
`;

export default GlobalStyles;
