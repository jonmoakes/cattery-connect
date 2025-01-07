import styled from "styled-components";
import { softBlack, warmBeige } from "../colours";

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
    background-color: ${warmBeige};
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
  background-color: ${warmBeige};
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

export const TopMarginDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorDiv = styled.div`
  background-color: lightPink;
  padding: 10px 10px 30px 10px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  margin: 0px auto;
  width: 75%;
  height: auto;
  box-shadow: 6px 6px 15px ${softBlack};
  padding: 0px 10px;

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
