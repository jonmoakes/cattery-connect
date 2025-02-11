import styled, { keyframes } from "styled-components";
import { zoomInLeft } from "react-animations";

import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

import { teal, softBlack, gentleGrey } from "../colours";

const zoomInLeftAnimation = keyframes`${zoomInLeft}`;

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

export const BackgroundSpan = styled.span`
  background-color: ${gentleGrey};
  color: ${softBlack};
  border: 1px solid ${softBlack};
  border-radius: 5px;
  padding: 10px 0px;
  min-width: 200px;
  display: flex;
  justify-content: center;
`;

export const LowercasedSpan = styled.span`
  text-transform: lowercase;

  &.right-margin {
    margin-right: 10px;
  }

  &.animate {
    animation: 0.5s ${zoomInLeftAnimation};
  }
`;

export const UppercaseSpan = styled.span`
  text-transform: uppercase;
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

export const ToggleResetPassword = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.resetPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleResetPasswordConfirmPassword = styled(
  SignInPasswordEye
).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${
      props.resetPasswordConfirmPasswordIsVisible ? eyeIconHide : eyeIcon
    })`};
  width: ${(props) =>
    `url(${props.resetPasswordConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ClearButtonExampleSpan = styled.span`
  background-color: tomato;
  color: ${softBlack};
  padding: 5px 10px;
  border: 1px solid ${softBlack};
  border-radius: 5px;
  text-transform: lowercase;
`;

export const RightMarginSpan = styled.span`
  margin-right: 10px;

  &.animate {
    animation: 0.5s ${zoomInLeftAnimation};
  }
`;

export const EmergencyDetailsSpan = styled.span`
  margin-left: 10px;
`;
