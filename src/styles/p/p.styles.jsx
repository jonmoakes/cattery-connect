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
