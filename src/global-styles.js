import { createGlobalStyle } from "styled-components";
import {
  customGreen,
  customYellow,
  radialDustyBlue,
  rustRed,
  softBlack,
  teal,
} from "./styles/colours";

import BackgroundImage from "./assets/cat-background-house.webp";

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Comfortaa', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    font-weight: 700;
    font-size: calc(1rem + 0.25vw);
    text-transform: capitalize;
    text-align: center;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    width: 100%;
    height: 100vh;

  }

  body {
    margin: 0px auto;
    width: 100%;
    height: 100%;
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
      background: url(${BackgroundImage}) repeat center center;
      background-size: contain;
      opacity: 0.4;
    }
  }

  h1 {
    color: ${teal};

    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  h2 {
    &.teal {
      color: ${teal};
    }

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  h3 {
    color: ${softBlack};

    &.white {
      color: whitesmoke;
      text-shadow: 1px 1px 1px ${softBlack};
    }
  }

  p {
    color: ${softBlack};

    &.white {
      color: whitesmoke;
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.yellow {
      color: ${customYellow};
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.red {
      color: ${rustRed};
      text-shadow: 0.5px 0.5px 0.5px  ${softBlack};
    }
  }

  span {
    &.red {
      color: ${rustRed};
      text-shadow: 0.5px 0.5px 0.5px  ${softBlack};
    }

    &.bright-red {
      color: red;
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.white {
      color: whitesmoke;
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.yellow {
      color: ${customYellow};
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.green {
      color: ${customGreen};
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.orange {
      color: orange;
      text-shadow: 1px 1px 1px ${softBlack};
    }

    &.black {
      color: ${softBlack};
      text-shadow:none;
    }

    &.pricing {
      background: ${radialDustyBlue};
      padding: 10px 20px;
      border: 1px solid ${softBlack};
      border-radius: 5px;
      color:${softBlack};
    }

    &.total-cost {
      background-color: ${customGreen};
      padding: 20px 30px;
      border: 1px solid ${softBlack};
      border-radius: 5px;
      color:${softBlack};
    }

    &.clickable {
      &:hover {
        cursor: pointer;
      }
    }
  }

  ul {
    padding-left: unset;
    display: table;
    margin: 10px auto;
    list-style-type: none;
    width: 90%;

    &.bullit {
      list-style-type: unset;
    }
  }

  li {
    font-size: calc(1rem);
    margin-bottom: 10px;
    color: ${softBlack};
  }

  a {
      color: ${teal};
      text-decoration: none;

      &.black {
        color: ${softBlack}
      }
  }
`;

export default GlobalStyles;
