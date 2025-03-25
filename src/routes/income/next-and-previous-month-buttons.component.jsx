import useIncomeFunctions from "./income-hooks/use-income-functions";

import { NextAndPreviousButton } from "../../styles/button/button.styles";
import { NextAndPreviousButtonContainer } from "../../styles/div/div.styles";

const NextAndPreviousMonthButtons = () => {
  const { changeMonth } = useIncomeFunctions();

  return (
    <NextAndPreviousButtonContainer className="income">
      <NextAndPreviousButton
        type="button"
        onClick={() => changeMonth("subtract")}
      >
        prev month
      </NextAndPreviousButton>
      <NextAndPreviousButton type="button" onClick={() => changeMonth("add")}>
        next month
      </NextAndPreviousButton>
    </NextAndPreviousButtonContainer>
  );
};

export default NextAndPreviousMonthButtons;
