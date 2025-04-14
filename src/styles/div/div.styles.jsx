import styled, { css, keyframes } from "styled-components";
import {
  customGreen,
  gentleGrey,
  radialBeige,
  radialDustyBlue,
  radialGreen,
  radialGrey,
  radialLightGreen,
  radialRustRed,
  radialSteelBlue,
  rustRed,
  softBlack,
  teal,
  warmBeige,
} from "../colours";

import {
  bounceInDown,
  rollIn,
  slideInLeft,
  slideInRight,
  bounceIn,
} from "react-animations";
import BackgroundImage from "../../assets/cat-in-basket.webp";
import AsleepImage from "../../assets/cat-asleep-in-basket.webp";
import PlayingWithToyImage from "../../assets/cat-playing-with-toy.webp";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInrightAnimation = keyframes`${slideInRight}`;
const rollInAnimation = keyframes`${rollIn}`;
const bounceInAnimation = keyframes`${bounceIn}`;

const backgroundImages = [AsleepImage, PlayingWithToyImage, BackgroundImage];

export const Nav = styled.div`
  background-color: ${warmBeige};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${softBlack};
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const Menu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHamburgerMenu",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-bottom: ${(props) => (props.showHamburgerMenu ? "50px" : "0px")};
  border-top: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${softBlack}` : "none"};
  border-bottom: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${softBlack}` : "none"};

  @media screen and (max-width: 1366px) {
    padding-top: ${(props) => (props.showHamburgerMenu ? "20px" : "0px")};
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.showHamburgerMenu ? "700px" : "0px")};
    transition: ${(props) =>
      props.showHamburgerMenu ? "max-height 0.5s linear" : "none"};
    overflow: scroll;
    background: ${radialBeige};
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SkeletonWrapper = styled.div`
  width: 40%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SkeletonDiv = styled.div`
  line-height: 2;
  padding: 5rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: ${softBlack};
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const HamburgerContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
  }
`;

export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${radialBeige};
  margin: 50px auto;
  width: 75%;
  height: auto;
  border-radius: 5px;
  border: 1px solid ${softBlack};
  box-shadow: 6px 6px 15px ${softBlack};
  padding: 10px;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  &.clear-week {
    margin: 0px auto 30px auto;
  }

  &.bounce {
    animation: 1s ${bounceInDownAnimation};
  }

  &.amount {
    margin: -20px auto 30px auto;
    padding: 0px 10px;
    display: inline-block;
    width: 50%;
    animation: 1s ${rollInAnimation};

    @media screen and (max-width: 1366px) {
      width: 75%;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const RelativePositionDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthButtonDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorDiv = styled.div`
  background-color: ${teal};
  padding: 10px 10px 30px 10px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  margin: 0px auto;
  width: 75%;
  height: auto;
  box-shadow: 6px 6px 15px ${softBlack};
  padding: 0px 10px;

  p {
    color: whitesmoke;
    text-shadow: 1px 1px 1px ${softBlack};
  }

  &.fetch-error {
    margin: 20px auto;
    white-space: pre;
  }

  &.margin {
    margin: 50px auto;
  }

  &.red {
    background: ${radialRustRed};
    margin: 20px auto;

    p {
      color: whitesmoke;
    }
  }

  &.cancel-booking {
    background: ${radialRustRed};
    margin: 0px auto 50px auto;
    animation: 1s ${slideInLeftAnimation};
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const NoSearchResultDiv = styled.div`
  width: 50%;
  height: auto;
  margin: 0px auto 50px auto;
  background: ${radialBeige};
  padding: 20px;
  border-radius: 15px;
  animation: 0.5s ${bounceInDownAnimation};
  border: 2px solid ${softBlack};

  &.no-search {
    margin: -10px auto 40px auto;

    @media screen and (max-width: 850px) {
      margin: 40px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 850px) {
    margin: 50px auto 50px auto;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const TableDiv = styled.div`
  width: 95%;
  margin: 0px auto;
  overflow-x: auto;
`;

export const PaginationDiv = styled(ParentDiv)`
  margin: 50px auto 0px auto;
  width: 50%;
  border: 2px solid ${softBlack};
  box-shadow: none;
  background: ${radialGrey};
  padding-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 20px;
`;

export const TableSearchDiv = styled.div`
  width: 50%;
  position: relative;
  margin: 0px auto -30px auto;
  animation: 0.5s ${slideInLeftAnimation};

  &.no-checkbox {
    margin: 0px auto 0px auto;

    @media screen and (max-width: 450px) {
      margin: 0px auto 40px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 0px auto 0px auto;
  }
`;

export const InLineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.wrap-text {
    white-space: "pre-wrap";
    min-width: 300px;
  }
`;

export const EmergencyDetailsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorFallbackImageDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto -30px auto;
`;

export const InnerFormDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "index",
})`
  width: 90%;
  height: auto;
  display: flex;
  margin: 40px auto;
  background: ${radialGrey};
  flex-direction: column;
  padding: 10px 0px;
  border: 2px solid ${softBlack};
  border-radius: 5px;

  &.cat-choice,
  &.slot-choice {
    width: 50%;
    position: relative;
    animation: 1s ${slideInrightAnimation} forwards;

    @media screen and (max-width: 950px) {
      width: 50%;
    }

    @media screen and (max-width: 600px) {
      width: 70%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${({ index }) => css`
        background-image: url(${backgroundImages[
          index % backgroundImages.length
        ]});
      `}
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.5;
      z-index: -1;
      pointer-events: none;
    }
  }
`;
export const Accordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHelp",
})`
  width: ${({ showHelp }) => (showHelp ? "70%" : "30%")};
  margin: 2rem auto;
  border: 2px solid ${softBlack};
  border-radius: 5px;

  &.neg-margin-top {
    margin: -10px auto 20px auto;
  }

  &.no-margin-top {
    margin: 0px auto 20px auto;
  }

  &.income {
    margin: 20px auto 20px auto;
  }

  &.password-security {
    margin: 30px auto -20px auto;
  }

  &.customer-id {
    margin: 20px auto;
  }

  &.daily-schedule {
    margin: -10px auto 40px auto;

    @media screen and (max-width: 600px) {
      margin: -10px auto 30px auto;
    }
  }

  &.bookings {
    margin: 30px auto 20px auto;

    @media screen and (max-width: 600px) {
      margin: 20px auto 10px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: ${({ showHelp }) => (showHelp ? "90%" : "50%")};
  }

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const AccordionTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHelp",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background: ${({ showHelp }) => (showHelp ? radialRustRed : radialGrey)};
  color: ${({ showHelp }) => (showHelp ? "whitesmoke" : softBlack)};
  font-size: 16px;
  padding: 5px;
  border-top-left-radius: ${({ showHelp }) => (showHelp ? "3px" : "3px")};
  border-top-right-radius: ${({ showHelp }) => (showHelp ? "3px" : "3px")};
  border-bottom-left-radius: ${({ showHelp }) => (showHelp ? "0px" : "3px")};
  border-bottom-right-radius: ${({ showHelp }) => (showHelp ? "0px" : "3px")};
  border-bottom: ${({ showHelp }) =>
    showHelp ? `2px solid ${softBlack}` : "none"};

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background: ${radialGrey};
  border-radius: 0px 0px 5px 5px;
  animation: 0.5s ${rollInAnimation};
`;

export const AccordionDetails = styled.div`
  width: 100%;
  height: auto;
  white-space: pre-line;
`;

export const TableOptionsButtonDiv = styled.div`
  display: flex;
  gap: 3px;
  margin: 0px auto 40px auto;
  max-width: 700px;

  @media screen and (max-width: 850px) {
    margin: 20px auto;
  }

  @media screen and (max-width: 539px) {
    flex-direction: column;
    margin: -20px auto 20px auto;
  }

  &:has(> button:nth-of-type(3)) {
    gap: 15px;
    flex-direction: column;
  }
`;

export const VaxStatusDiv = styled.div`
  width: 50%;
  height: auto;
  text-align: center;
  margin: 80px auto 0px auto;
  border-radius: 5px;
  background: ${softBlack};
  padding: 10px 0px;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const ForgotPasswordDiv = styled.div`
  margin: 20px auto 20px auto;
`;

export const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  margin: 20px auto 35px auto;
  animation: 0.5s ${slideInLeftAnimation};

  &.no-margin-top {
    margin: 0px auto 35px auto;
  }

  &.neg-margin {
    margin: -15px auto 0px auto;
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const StyledDatePickerWrapper = styled.div`
  width: 50%;

  .react-datepicker {
    border: 5px solid ${softBlack};
    border-radius: 5px;
  }

  .react-datepicker__header {
    background: ${radialDustyBlue};
    border-radius: 0px;
    border-bottom: 5px solid ${softBlack};
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${rustRed};
  }

  .react-datepicker__day--selected {
    border: 2px solid black !important;
    background-color: ${customGreen} !important;
    color: ${softBlack} !important;
  }

  .react-datepicker__month-container {
    background: ${radialGrey};
  }

  .react-datepicker__day--disabled {
    color: ${rustRed};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
    background: ${radialDustyBlue};
    border: 2px solid ${softBlack};
    border-radius: 5px;
    padding: 10px;
    font-size: 0.9rem;
    font-weight: 900;
    font-family: inherit;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const RadioLabelDiv = styled.div`
  margin: 30px auto -10px auto;
`;

export const BookingWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 20px auto;
  border: 1px solid ${softBlack};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  animation: 1s ${rollInAnimation};

  &.available {
    background: ${radialLightGreen};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: 0px auto 20px auto;
    padding: 20px 0px;
  }

  &.unavailable {
    background: ${radialGrey};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const DataDiv = styled.div`
  background: ${radialSteelBlue};
  width: 100%;
  height: auto;
  margin: 0px auto 0px auto;
  animation: 0.5s ${bounceInDownAnimation};
  padding: 20px 10px;
  border: 2px solid ${softBlack};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 6px 6px 15px ${softBlack};

  &.error {
    background: ${radialRustRed};
    width: 90%;
    margin: 10px auto 0px auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.morning {
    background: ${radialGreen};
    width: 75%;
    margin: 0px auto 30px auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media screen and (max-width: 1366px) {
      width: 90%;
    }

    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  &.afternoon {
    background: ${radialGreen};
    width: 75%;
    margin: 0px auto 70px auto;
    border-radius: 5px;

    @media screen and (max-width: 1366px) {
      width: 90%;
    }

    @media screen and (max-width: 450px) {
      width: 95%;
    }
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const BounceInDiv = styled.div`
  animation: 2s ${bounceInAnimation};
`;

export const NextAndPreviousButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 10px auto;

  &.income {
    margin: 10px auto 20px auto;
  }

  &.margin {
    margin: 0px auto 25px auto;

    @media screen and (max-width: 600px) {
      margin: -10px auto 20px auto;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 20px auto 5px auto;
  }
`;

//compensates for container padding
export const FooterContainer = styled.div`
  width: 100%;
  margin: -75px auto 0px auto;
  padding-bottom: 100px;
`;

export const FooterLinksDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }

  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const UnderTitleContainer = styled.div`
  margin: -20px auto 20px auto;

  &.account {
    margin: -10px auto 0px auto;
  }
`;

export const DataDetailsDiv = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  padding: 10px 0px 20px 0px;

  &.with-background {
    background: ${radialBeige};
    border: 1px solid ${softBlack};
    border-radius: 5px;
    width: 50%;
    margin: 0px auto 50px auto;
    box-shadow: 6px 6px 15px ${softBlack};

    @media screen and (max-width: 1366px) {
      box-shadow: none;
    }

    @media screen and (max-width: 850px) {
      width: 75%;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const CardInputDiv = styled.div`
  background-color: ${gentleGrey};
  height: 60px;
  width: 50%;
  margin: 10px auto 40px auto;
  padding: 20px 20px 30px 20px;
  border-radius: 5px;
  border: 2px solid ${softBlack};

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const WarningDiv = styled(ErrorDiv)`
  width: 50%;
  margin: 10px auto 30px auto;
  background: ${radialGreen};
  box-shadow: 12px 12px 12px ${softBlack};
  padding: 0px 10px;

  @media screen and (max-width: 1366px) {
    width: 70%;
    box-shadow: none;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }
`;

export const PaymentErrorDiv = styled(WarningDiv)`
  background: ${radialRustRed};
`;

export const TotalCostDiv = styled.div`
  margin: 20px auto;
`;

export const AnimatedDiv = styled.div`
  margin: 0px auto;
  width: 100%;
  animation: 1.5s ${rollInAnimation};
`;

export const CentredDiv = styled.div`
  width: 100%;
  margin: 20px auto;
`;

export const AmountButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1366px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 50px;
  }
`;
