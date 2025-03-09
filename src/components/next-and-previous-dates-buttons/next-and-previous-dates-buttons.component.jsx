import useGetNextOrPreviousDaysData from "./next-and-previous-dates-hooks/use-get-next-or-previous-days-data";

import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

import { NextAndPreviousDateButton } from "../../styles/button/button.styles";
import { NextAndPreviousDateButtonContainer } from "../../styles/div/div.styles";

const NextAndPreviousDatesButtons = () => {
  const { getNextOrPreviousDaysData } = useGetNextOrPreviousDaysData();

  return (
    <>
      <CustomBalancedText className="white">or </CustomBalancedText>

      <NextAndPreviousDateButtonContainer>
        <NextAndPreviousDateButton
          type="button"
          onClick={() => getNextOrPreviousDaysData("previous")}
        >
          prev day
        </NextAndPreviousDateButton>
        <NextAndPreviousDateButton
          type="button"
          onClick={() => getNextOrPreviousDaysData("next")}
        >
          next day
        </NextAndPreviousDateButton>
      </NextAndPreviousDateButtonContainer>
    </>
  );
};

export default NextAndPreviousDatesButtons;
