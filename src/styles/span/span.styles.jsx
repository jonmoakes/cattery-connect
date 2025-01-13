import styled from "styled-components";

import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

import { teal, softBlack } from "../colours";

export const BorderLink = styled.span`
  color: ${teal};
  border: 2px solid ${teal};
  padding: 5px;
  border-radius: 5px;
`;

export const HamburgerSpan = styled.span`
  height: 6px;
  width: 35px;
  background-color: ${teal};
  margin-bottom: 4px;
  border-radius: 5px;
`;

export const HamburgerSpanCloseMenu = styled(HamburgerSpan)`
  background-color: ${softBlack};
`;

export const RedSpan = styled.span`
  color: red;
`;

export const LowercasedSpan = styled.span`
  text-transform: lowercase;
`;

export const SignInPasswordEye = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "signInPasswordIsVisible",
})`
  position: absolute;
  top: 69%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.signInPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1366px) {
    right: 30px;
  }

  @media screen and (max-width: 450px) {
    right: 20px;
  }
`;
