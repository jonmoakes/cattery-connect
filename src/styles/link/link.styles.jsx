import styled from "styled-components";
import { Link } from "react-router-dom";

import { teal } from "../colours";

export const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: ${teal};

    @media screen and (max-width: 1366px) {
      color: red;
    }
  }
`;
