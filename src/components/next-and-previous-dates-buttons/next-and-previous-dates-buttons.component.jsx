import useGetNextOrPreviousDaysData from "./next-and-previous-dates-hooks/use-get-next-or-previous-days-data";

import { NextAndPreviousDateButton } from "../../styles/button/button.styles";
import { NextAndPreviousDateButtonContainer } from "../../styles/div/div.styles";

const NextAndPreviousDatesButtons = ({ className }) => {
  const { getNextOrPreviousDaysData } = useGetNextOrPreviousDaysData();

  return (
    <NextAndPreviousDateButtonContainer {...{ className }}>
      <NextAndPreviousDateButton
        type="button"
        onClick={() => getNextOrPreviousDaysData("previous")}
        className={className ? className : ""}
      >
        &lt;
      </NextAndPreviousDateButton>
      <NextAndPreviousDateButton
        type="button"
        onClick={() => getNextOrPreviousDaysData("next")}
      >
        &gt;
      </NextAndPreviousDateButton>
    </NextAndPreviousDateButtonContainer>
  );
};

export default NextAndPreviousDatesButtons;
