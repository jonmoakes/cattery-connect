import styled from "styled-components";

import { softBlack } from "../colours";

export const BlackHr = styled.hr`
  width: 90%;
  border: 1px solid ${softBlack};

  &.margin {
    margin-bottom: 50px;
  }
`;

export const HrWithMargin = styled(BlackHr)`
  margin: 30px auto 0px auto;
`;
