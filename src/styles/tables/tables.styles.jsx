import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";
import {
  radialBeige,
  radialDustyBlue,
  radialSteelBlue,
  softBlack,
} from "../colours";

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
    background: ${radialBeige};
    animation: 0.5s ${fadeInLeftAnimation};
  }

  .column-catsName {
    min-width: 150px;
    max-width: 400px;
  }

  .column-status {
    width: 200px;
  }

  .column-emergencyContactDetails,
  .column-catsFeedingInfo,
  .column-catsMedicalInfo,
  .column-catsBehaviourInfo,
  .column-vaccinationStatus {
    min-width: 250px;
    max-width: 400px;
  }

  .column-cats {
    min-width: 300px;
    max-width: 400px;
  }

  tr {
    background: ${radialDustyBlue};
    color: ${softBlack};
    animation: 0.5s ${fadeInRightAnimation};

    &:nth-child(even) {
      background: ${radialSteelBlue};
      color: ${softBlack};
      animation: 0.5s ${fadeInLeftAnimation};
    }
  }
`;
