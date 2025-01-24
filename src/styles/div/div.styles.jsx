import styled, { keyframes } from "styled-components";
import {
  radialBeige,
  radialGrey,
  radialRustRed,
  softBlack,
  teal,
} from "../colours";

import { bounceInDown, rollIn, slideInLeft } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const rollInAnimation = keyframes`${rollIn}`;

export const Nav = styled.div`
  background: ${radialBeige};
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
`;

export const RelativePositionDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthButtonDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0px auto 20px auto;
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
  }

  &.margin {
    margin: 50px auto;
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

export const InnerFormDiv = styled.div`
  width: 90%;
  display: flex;
  margin: 40px auto;
  background: ${radialGrey};
  flex-direction: column;
  padding: 10px 0px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
`;

export const Accordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHelp",
})`
  width: ${({ showHelp }) => (showHelp ? "70%" : "30%")};
  margin: 2rem auto;
  border: 2px solid ${softBlack};
  border-radius: 5px;

  @media screen and (max-width: 1366px) {
    width: ${({ showHelp }) => (showHelp ? "90%" : "50%")};
  }

  @media screen and (max-width: 450px) {
    width: ${({ showHelp }) => (showHelp ? "90%" : "70%")};
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
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 80px;
`;

export const ForgotPasswordDiv = styled.div`
  margin: 20px auto 20px auto;
`;
