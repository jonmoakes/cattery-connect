import DatePicker from "react-datepicker";
import styled from "styled-components";
import { rustRed, softBlack } from "../colours";

export const StyledDatePicker = styled(DatePicker)`
  font-family: inherit;
  text-align: center;
  margin-top: 10px;

  &:focus {
    outline: none;
    border-color: ${rustRed};
    box-shadow: 6px 6px 6px ${softBlack};
  }
`;
