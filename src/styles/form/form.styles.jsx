import styled from "styled-components";
import { gentleGrey, rustRed, softBlack, teal, warmBeige } from "../colours";

export const Form = styled.form`
  width: 75%;
  padding: 30px 0px;
  margin: 50px auto 70px auto;
  background-color: ${teal};
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-shadow: 6px 6px 15px ${softBlack};

  &.small-top-margin {
    margin: 20px auto 70px auto;
  }

  input {
    accent-color: ${teal};
  }

  input[type="radio"] {
    display: flex;
    margin: 15px auto 0px auto;
    justify-content: center;
    width: 30px;
    height: 30px;
    accent-color: red;
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
    box-shadow: none;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    padding: 20px 0px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: whitesmoke;
  text-shadow: 1px 1px 1px ${softBlack};
  float: left;
  padding-left: 20px;
  margin-top: 15px;

  &.margin {
    margin-bottom: 20px;
  }

  &.no-padding {
    margin-top: 10px;
    float: unset;
    padding-left: 0px;
    text-shadow: none;
    color: ${softBlack};
  }

  @media screen and (max-width: 1000px) {
    padding-left: 15px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 10px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const StyledInput = styled.input`
  width: 95%;
  height: 50px;
  padding: 12px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px auto;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  background-color: ${gentleGrey};
  color: ${softBlack};
  text-transform: capitalize;

  &:focus {
    border: 2px solid ${rustRed};
    box-shadow: 6px 6px 6px ${softBlack};
  }

  &::placeholder {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1366px) {
    &:focus {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    height: 40px;
  }
`;

export const PasswordInput = styled(StyledInput)`
  padding-right: 36px;
`;

export const LowercasedInput = styled(StyledInput)`
  text-transform: lowercase;
`;

export const UppercasedInput = styled(StyledInput)`
  text-transform: uppercase;
`;

export const StyledTextArea = styled.textarea`
  width: 95%;
  padding: 12px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px auto;
  font-size: 18px;
  height: 200px;
  font-family: inherit;
  outline: none;
  text-transform: capitalize;
  background-color: ${gentleGrey};
  color: ${softBlack};

  &:focus {
    border: 3px solid ${rustRed};
    box-shadow: 6px 6px 6px ${softBlack};
  }

  @media screen and (max-width: 1366px) {
    &:focus {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const StyledSelect = styled.select`
  width: 95%;
  height: 50px;
  padding: 12px;
  border: 2px solid ${softBlack};
  border-radius: 5px;
  box-shadow: 6px 6px 6px ${softBlack};
  box-sizing: border-box;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  outline: none;
  background: radial-gradient(circle, whitesmoke, ${gentleGrey});
  color: ${softBlack};
  text-transform: capitalize;

  &:focus {
    border-color: ${rustRed};
  }

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    height: 40px;
    font-size: 12px;
  }
`;

export const PaginationSelect = styled.select`
  width: 200px;
  height: 40px;
  background-color: ${warmBeige};
  color: ${softBlack};
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${softBlack};
  outline: none;
  font-size: 16px;
`;

export const PaginationInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid ${softBlack};
  background-color: ${warmBeige};
  text-align: center;
`;

export const SearchInput = styled.input`
  margin: 0px auto 50px auto;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 50px;
  border-radius: 5px;
  background-color: whitesmoke;
  border: 2px solid ${softBlack};
  padding-left: 20px;
  font-family: inherit;
  font-size: 18px;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: ${rustRed};
  }

  ::placeholder {
    font-size: 16px;
  }

  @media screen and (max-width: 850px) {
    margin: 0px auto 0px auto;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-left: 5px;
  }
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  background-color: ${gentleGrey};
  margin: 10px auto 0px auto;
  font-family: inherit;

  width: 1.9rem;
  height: 1.9rem;
  border: 2px solid black;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &.multiple {
    margin: 10px auto 15px auto;
  }

  &::before {
    content: "";
    width: 1.3rem;
    height: 1.3rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${teal};
  }

  &:checked::before {
    transform: scale(1);
  }
`;
