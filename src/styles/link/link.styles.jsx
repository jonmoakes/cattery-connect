import styled from "styled-components";
import { Link } from "react-router-dom";

import { customYellow, rustRed, softBlack, teal } from "../colours";

export const StyledLink = styled(Link)`
  color: ${rustRed};
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: ${teal};

    @media screen and (max-width: 1366px) {
      color: ${rustRed};
    }
  }

  &.white {
    color: whitesmoke;
    text-decoration: none;
    text-transform: capitalize;
    text-shadow: 1px 1px 1px ${softBlack};

    &:hover {
      color: ${customYellow};

      @media screen and (max-width: 1366px) {
        color: whitesmoke;
      }
    }
  }

  &.yellow {
    color: ${customYellow};
    text-shadow: 1px 1px 1px ${softBlack};

    &:hover {
      color: orange;

      @media screen and (max-width: 1366px) {
        color: ${customYellow};
      }
    }
  }
`;
