import styled, { keyframes } from "styled-components";
import { bounceInDown, pulse, zoomInLeft, zoomInRight } from "react-animations";

import {
  customYellow,
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
    box-shadow: 6px 6px 6px ${softBlack};

    @media screen and (max-width: 1366px) {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }

  &.margin {
    margin: 50px auto 30px auto;
  }

  &.update-prices {
    background: ${radialDustyBlue};
    margin: 20px auto 50px auto;
  }

  &.red {
    background: ${radialRustRed};
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  &.teal {
    background: ${radialGreen};
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  &.animate {
    margin: 20px auto 50px auto;
    animation: 1s ${zoomInLeftAnimation};
  }

  &.email {
    text-transform: lowercase;
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

  &.teal {
    background: ${radialGreen};
    color: whitesmoke;
    text-shadow: 0.5px 0.5px 0.5px ${softBlack};
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

  &.update {
    margin: 10px auto 0px auto;
  }

  &.settle-payment {
    margin: 10px auto 0px auto;
  }

  &.animate {
    animation: 1s ${zoomInLeftAnimation};
  }

  &.selected {
    background: ${radialDustyBlue};
  }

  &.clear-week {
    margin: 0px auto 10px auto;
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

export const BackButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: fixed;
  left: 10px;
  bottom: 22px;
  background: ${radialGrey};
  color: ${softBlack};
  border: 2px solid ${softBlack};
  z-index: 10;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: 450px) {
    height: 55px;
    width: 55px;
    bottom: 25px;
  }
`;

export const NextAndPreviousButton = styled.button`
  font-family: inherit;
  font-size: 16px;
  text-transform: capitalize;
  width: auto;
  padding: 5px 10px;
  margin: 0px 10px;
  background: ${radialGrey};
  border: 1px solid ${softBlack};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  color: ${softBlack};

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
`;

export const FooterLinkButton = styled.button`
  font-family: inherit;
  font-size: 16px;
  text-transform: capitalize;
  min-width: 200px;
  height: 35px;
  margin: 20px auto;
  padding: 0px 10px;
  background: ${radialDustyBlue};
  border: 1px solid ${softBlack};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  color: ${softBlack};

  &:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 6px ${softBlack};

    @media screen and (max-width: 1366px) {
      transition: none;
      transform: none;
      box-shadow: none;
    }
  }
`;
