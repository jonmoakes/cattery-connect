import styled, { keyframes } from "styled-components";
import { bounceInDown, pulse } from "react-animations";

import { customYellow, rustRed, softBlack, teal, warmBeige } from "../colours";
import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

const PulseAnimation = keyframes`${pulse}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  color: ${softBlack};
  background-color: ${warmBeige};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${softBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  &.teal {
    background-color: ${teal};
    color: whitesmoke;
    text-shadow: 0.5px 0.5px 0.5px ${softBlack};
  }

  &.add-booking {
    background-color: ${customYellow};
    color: ${softBlack};

    &:hover {
      background-color: orange;
      color: ${softBlack};

      @media screen and (max-width: 1366px) {
        transition: none;

        &:hover {
          background-color: ${customYellow};
          color: ${softBlack};
        }
      }
    }
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${rustRed};
    color: whitesmoke;

    @media screen and (max-width: 1366px) {
      transition: none;

      &:hover {
        background-color: ${warmBeige};
        color: ${softBlack};
      }
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${softBlack};
  }

  @media screen and (max-width: 320px) {
    width: 200px;
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
  background-color: lightgreen;
  color: ${softBlack};
  font-family: inherit;

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

export const MinimalButton = styled.button`
  margin: 0px auto;
  padding: 5px;
  text-transform: capitalize;
  height: auto;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customYellow};
  font-family: inherit;
  outline: none;
  border: 1px solid ${softBlack};
  border-radius: 2px;
  color: ${softBlack};

  &:hover {
    cursor: pointer;
  }
`;
