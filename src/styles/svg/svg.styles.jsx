import styled from "styled-components";

import BackArrowSVG from "../../assets/back-arrow.svg?react";
import StripeSVG from "../../assets/stripe-logo.svg?react";

export const BackArrow = styled(BackArrowSVG)``;

export const StripeLogo = styled(StripeSVG)`
  width: 300px;
  height: auto;
  margin-top: -80px;
  border-radius: 15px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    width: 200px;
  }

  @media screen and (max-width: 450px) {
    margin-top: -70px;
  }

  @media screen and (max-width: 320px) {
    width: 100px;
    margin-top: -45px;
  }
`;
