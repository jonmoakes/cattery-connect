import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";
import { dustyBlue, softBlack, steelBlue, warmBeige } from "../colours";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const TableWithStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  white-space: pre-line;
  text-align: center;

  th,
  td {
    font-size: 1rem;
    border: 2px solid ${softBlack};
    padding: 20px 10px;
    white-space: pre-wrap;
  }

  th {
    background-color: ${warmBeige};
    animation: 0.5s ${fadeInLeftAnimation};
  }
  .column-catsFeedingInfo,
  .column-catsMedicalInfo,
  .column-catsBehaviourInfo {
    min-width: 250px;
    max-width: 400px;
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
`;
