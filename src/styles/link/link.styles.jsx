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
      color: red;
    }
  }
`;

export const WhiteLink = styled(Link)`
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
`;

export const OrangeLink = styled(Link)`
  color: orange;
  text-transform: capitalize;
  text-decoration: none;
`;
