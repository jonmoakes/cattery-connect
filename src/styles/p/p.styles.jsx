import styled from "styled-components";
import { darkGold, softBlack } from "../colours";

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: whitesmoke;
  text-align: center;
`;

export const NavLink = styled.p`
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: inline-block;
  min-width: 150px;
  text-align: center;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
`;

export const OptionsLabel = styled.p`
  margin: 10px auto 10px auto;
  color: whitesmoke;
  text-shadow: 1px 1px 1px ${softBlack};

  &.over-bg {
    margin: 10px auto 10px auto;
    background-color: ${darkGold};
    border: 3px solid ${softBlack};
    border-radius: 5px;
    color: ${softBlack};
    text-shadow: none;
    border-radius: 5px;
    padding: 10px 20px;
    opacity: 0.9;
    width: 70%;

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  &.wrap {
    white-space: pre-wrap;
  }
`;
