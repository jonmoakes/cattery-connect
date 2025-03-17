import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

import { softBlack } from "../colours";

const PulseAnimation = keyframes`${pulse}`;

export const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid ${softBlack};
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease-in-out;
  margin: 20px auto 30px auto;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-shadow: 15px 15px 15px ${softBlack};

  &.no-border {
    border: none;
    border-radius: unset;
    box-shadow: none;
  }

  &.imac {
    margin: -100px auto;

    @media screen and (max-width: 1366px) {
      margin: -50px auto;
    }

    @media screen and (max-width: 600px) {
      margin: -50px auto 30px auto;
    }

    @media screen and (max-width: 450px) {
      margin: -50px auto 20px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }
`;

export const IconImage = styled.img`
  height: 40px;
  width: 40px;
  transition: all 1s ease-in-out;
  animation: infinite 1s ${PulseAnimation};

  &:hover {
    cursor: pointer;
  }

  &.email {
    height: 38px;
    width: 38px;
    margin-top: -5px;

    @media screen and (max-width: 450px) {
      height: 28px;
      width: 28px;

      margin-top: -3px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 30px;
    width: 30px;
  }
`;
