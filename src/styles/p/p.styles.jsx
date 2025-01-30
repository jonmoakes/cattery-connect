import styled from "styled-components";
import { customYellow, softBlack } from "../colours";

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: whitesmoke;
  text-align: center;
`;

export const NavLink = styled.p`
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
`;

export const WhiteText = styled.p`
  color: whitesmoke;
  text-shadow: 1px 1px 1px ${softBlack};
`;

export const YellowText = styled.p`
  color: ${customYellow};
  text-shadow: 1px 1px 1px ${softBlack};
`;

export const OptionsLabel = styled.p`
  color: ${softBlack};
  margin: 10px auto 10px auto;

  &.white {
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  &.over-bg {
    background-color: ${softBlack};
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
    border-radius: 5px;
    padding: 5px;
    opacity: 0.9;
    width: 90%;
  }

  &.wrap {
    white-space: pre-wrap;
  }
`;
