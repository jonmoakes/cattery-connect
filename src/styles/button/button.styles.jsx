import styled, { keyframes } from "styled-components";
import { bounceInDown, pulse, zoomInLeft, zoomInRight } from "react-animations";

import {
  radialBeige,
  radialDustyBlue,
  radialGreen,
  radialGrey,
  radialLightGreen,
  radialRustRed,
  radialYellow,
  rustRed,
  softBlack,
} from "../colours";
import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

const PulseAnimation = keyframes`${pulse}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const zoomInLeftAnimation = keyframes`${zoomInLeft}`;
const zoomInRightAnimation = keyframes`${zoomInRight}`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  background: ${radialBeige};
  color: ${softBlack};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${softBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${softBlack};
  }

  &:hover {
    transform: scale(1.05);
    color: ${softBlack};

    @media screen and (max-width: 1366px) {
      transition: none;
      transform: none;
    }
  }

  &.margin {
    margin: 50px auto 30px auto;
  }

  &.red {
    background: ${radialRustRed};
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  &.cancel {
    margin-top: 40px;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const MinimalButton = styled.button`
  margin: 0px auto;
  padding: 10px;
  text-transform: capitalize;
  height: auto;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${radialYellow};
  font-family: inherit;
  font-weight: 700;
  outline: none;
  border: 1px solid ${softBlack};
  border-radius: 5px;
  color: ${softBlack};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: ${softBlack};
    cursor: pointer;

    @media screen and (max-width: 1366px) {
      transition: none;
      transform: none;
    }
  }

  &.margin-bottom {
    background: ${radialGreen};
    color: whitesmoke;
    text-shadow: 0.5px 0.5px 0.5px ${softBlack};
    margin: 0px auto 20px auto;

    &:hover {
      color: whitesmoke;
      text-shadow: 0.5px 0.5px 0.5px ${softBlack};
    }
  }

  &.accordion {
    background: ${radialGreen};
    color: whitesmoke;
    text-shadow: 0.5px 0.5px 0.5px ${softBlack};

    &:hover {
      color: whitesmoke;
      text-shadow: 0.5px 0.5px 0.5px ${softBlack};
    }
  }

  &.margin {
    margin: 20px auto;
  }

  &.payment-status {
    margin: 10px auto 0px auto;
    background: ${radialGrey};
  }

  &.animate {
    animation: 1s ${zoomInLeftAnimation};
  }

  &.selected {
    background: ${radialDustyBlue};
  }
`;

export const RadialTealButton = styled(Button)`
  background: ${radialGreen};
  color: whitesmoke;
  text-shadow: 0.5px 0.5px 0.5px ${softBlack};

  &:hover {
    color: whitesmoke;
  }
`;

export const SelectCustomerButton = styled(Button)`
  background: ${radialGreen};
  color: whitesmoke;
  text-shadow: 0.5px 0.5px 0.5px ${softBlack};
  margin-bottom: 50px;

  &:hover {
    color: whitesmoke;
  }
`;

export const DisabledButton = styled(Button)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const PaginationPageButton = styled(Button)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px 20px 0px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background: ${radialGreen};
  color: whitesmoke;
  text-shadow: 1px 1px 1px ${softBlack};
  font-family: inherit;

  &:hover {
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  @media screen and (max-width: 1024px) {
    margin: 0px 5px 20px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const ClearSearchButton = styled.button`
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  height: 50px;
  width: 5%;
  cursor: pointer;
  color: whitesmoke;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${softBlack};
  background-color: tomato;
  transform: translateX(2px);
  text-transform: capitalize;
  font-family: inherit;
  color: ${softBlack};
  font-weight: 700;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 1366px) {
    width: 10%;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;

export const ToggleShowEmailButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "showEmail",
})`
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.showEmail ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  animation: infinite 2s ${PulseAnimation};
`;

export const ToggleShowPhoneNumberButton = styled(
  ToggleShowEmailButton
).withConfig({
  shouldForwardProp: (prop) => prop !== "showPhone",
})`
  background-image: ${(props) =>
    `url(${props.showPhone ? eyeIconHide : eyeIcon})`};
`;

export const EntryOptionsButton = styled(Button)`
  animation: 1s ${zoomInLeftAnimation};
  width: 250px;
  height: 50px;
  font-size: 18px;
  line-height: 10px;
  color: ${softBlack};
  text-shadow: none;

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 539px) {
    margin: 10px auto;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }

  &.showOwner,
  &.showAllCats {
    background: ${radialYellow};
  }

  &.edit {
    background: ${radialLightGreen};
  }

  &.delete {
    background: ${radialRustRed};
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
    animation: 1s ${zoomInRightAnimation};
  }
`;

export const PlainButton = styled.button`
  font-size: 1.2rem;
  text-transform: capitalize;
  color: ${softBlack};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &.red {
    color: ${rustRed};
    text-shadow: 0.5px 0.5px 0.5px ${softBlack};
  }
`;
