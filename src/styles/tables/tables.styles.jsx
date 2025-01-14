import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";
import { dustyBlue, softBlack, steelBlue, warmBeige } from "../colours";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 0px auto 200px auto;
  text-shadow: none;
  white-space: pre-line;
  width: 100%;

  th {
    font-size: calc(1rem);
    padding: 20px 5px;
    border: 2px solid ${softBlack};
    width: auto;
    background-color: ${warmBeige};
    color: ${softBlack};
    animation: 0.5s ${fadeInLeftAnimation};
  }

  tr {
    background-color: ${steelBlue};
    color: ${softBlack};
    animation: 0.5s ${fadeInRightAnimation};

    &:nth-child(even) {
      background-color: ${dustyBlue};
      color: ${softBlack};
      animation: 0.5s ${fadeInLeftAnimation};
    }
  }

  td {
    border: 2px solid ${softBlack};
    padding: 20px 10px;
    width: auto;
  }

  @media screen and (max-width: 1366px) {
    width: 200%;
    margin: 0px auto 0px auto;
  }
`;
