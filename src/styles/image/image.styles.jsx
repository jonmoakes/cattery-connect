import styled from "styled-components";
import { softBlack } from "../colours";

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
  margin: 20px auto 50px auto;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-shadow: 15px 15px 15px ${softBlack};

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 90%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 75%;
  }

  @media screen and (min-width: 1025px) {
    max-width: 50%;
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }
`;
