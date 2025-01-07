import styled from "styled-components";
import { rustRed, softBlack, warmBeige } from "../colours";

export const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  color: ${softBlack};
  background-color: ${warmBeige};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${softBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  &:hover {
    transform: scale(1.05);
    background-color: ${rustRed};
    color: whitesmoke;

    @media screen and (max-width: 1366px) {
      transition: none;

      &:hover {
        background-color: ${warmBeige};
        color: ${softBlack};
      }
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${softBlack};
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const DisabledButton = styled(Button)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const YellowGreenButton = styled(Button)`
  &.disabled {
    margin: 0px auto 40px auto;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background-color: lightgreen;
    color: ${softBlack};
    text-shadow: none;

    @media screen and (max-width: 1366px) {
      background-color: unset;
      color: unset;
    }
  }
`;
